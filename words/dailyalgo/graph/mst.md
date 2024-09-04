## Prim 算法

算法主要解决 MST 问题：

1. 给定一个 Graph

2. 找到一个 Subgraph 满足下面的条件：

   1. 包含原始 Graph 中的所有节点

   2. 这些节点是 Connected，且没有环

   3. 连接这些节点的边上的权重和在所有可能性之中最小

算法的步骤：

1. 以 Graph 中的任意节点 CurrentNode 为起点，加入到 VistedNodes 中，可以将其看成是 Subgraph

2. 接着往 Subgraph 中逐步添加节点：

   1. 找到 VistedNodes 之外的一个节点，该节点到 Subgraph 的边上的权重最小

   2. 将该节点加入到 Subgraph 中

   3. 如果还有剩余节点，则重复第 2 步，否则处理完成

简单证明：

1. 根据 MST 的定义，任意挑选的起始节点必然是 a subgraph of MST

2. Prim 每一步扩大的 Subgraph 都是 a subgraph of an MST，因此最终构建的结果必定是 one of MSTs
