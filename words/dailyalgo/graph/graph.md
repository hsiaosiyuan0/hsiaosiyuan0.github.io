# Graph theory

Definition - Graph theory is the study of mathematical objects known as graphs, which consist of vertices (or nodes) connected by edges.

Common usage - Any scenario in which one wishes to examine the structure of a network of connected objects is potentially a problem for graph theory.

Below sentence seems wrong:

> A non-trivial graph consists of one or more vertices (or nodes) connected by edges.
>
> from https://brilliant.org/wiki/graph-theory/

because the trivial graph is the graph on one vertex. This graph meets the definition of conneced vacuously (since an edage requires two vertices). A non-trivial connected graph is any connected graph that isn't this graph.

In mathematics, the adjective *trivial* is frequently used for objects (for example, groups or topological spaces) that have a very simple structure.

The **degree** of a vertex is the number of edges connected to that vertex.

In the graph below, vertex A is degress 3, while vertices B and C are degree 2, vertex D is degree 1, and vertex E is of degree 0.

<img src="https://github.com/hsiaosiyuan0/hsiaosiyuan0.github.io/assets/22588905/c6204b5e-4fc4-4fb0-ab38-ac925a7f56e1" width="200" />

A graph is said to be complete if there exists an edge connecting every two pairs of vertices:

<img src="https://github.com/hsiaosiyuan0/hsiaosiyuan0.github.io/assets/22588905/27e41d90-9f4e-44bc-a444-1e85c2a2f906" width="200" />

The number of edges in a complete graph with $n$ vertices can be found by:

$(n-1) + (n-2) + ... + 2 + 1 = \frac{n(n-1)}{2}$

Given a graph $G = (V, E)$, the degree sum formula can be written  as: 

$\sum_{v \in V} deg(v) = 2|E|$

## Adjacency matrix

An adjacency matrix is a square matrix (same number of rows and columns), used to represent a finite graph. The elements of the matrix indicate whether pairs of vertices are adjacent or not in the graph.

Space complexity is $O(n^2)$

## Adjacency list

An adjacency list is a collection of unordered lists used to represent a finite graph. Each unordered list within an adjacency list describes the set of neighbors of a particular vetex in the graph.

