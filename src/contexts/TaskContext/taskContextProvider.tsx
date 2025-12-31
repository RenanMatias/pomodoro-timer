import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(event => {
    const countDownSeconds = event.data;
    console.log(countDownSeconds);

    if (countDownSeconds <= 0) {
      console.log("Worker completed");
      worker.terminate();
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      worker.terminate();
      console.log("Worker terminated because due to lack of activeTask");
    }

    worker.postMessage(state);
  }, [worker, state]);

  return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>;
}
