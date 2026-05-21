type IdleHandle = ReturnType<typeof setTimeout>;

export function scheduleIdle(callback: () => void, timeout = 2000): IdleHandle {
  if (typeof globalThis.requestIdleCallback === "function") {
    return globalThis.requestIdleCallback(callback, { timeout }) as unknown as IdleHandle;
  }
  return globalThis.setTimeout(callback, 300);
}

export function cancelIdle(id: IdleHandle): void {
  if (typeof globalThis.cancelIdleCallback === "function") {
    globalThis.cancelIdleCallback(id as unknown as number);
  } else {
    globalThis.clearTimeout(id);
  }
}
