## legacyCreateRootFromDOMContainer 
packages/react-reconciler/src/ReactFiberRoot.old.js

创建了一个 FiberRootNode，然后创建一个 createHostRootFiber，关联两者：

```js
  const uninitializedFiber = createHostRootFiber(tag);
  // The currently active root fiber. This is the mutable root of the tree
  root.current = uninitializedFiber;
  uninitializedFiber.stateNode = root;
```

- 然后在 root fiber 上设置 update queue
- enableEagerRootListeners

tag LegacyRoot

和 Scheduler 集成 packages/react-reconciler/src/SchedulerWithReactIntegration.old.js
