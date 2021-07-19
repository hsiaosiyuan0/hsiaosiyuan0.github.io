node 模块使用 CS 架构，控制运行于 go 之上的 esbuild

CS 架构使用 stdin/stdout 通信，而不是 socket，我猜测是为了利用 IPC 的性能，同时具有兼容性（兼容 Windows）。该结论基于 [Sockets vs Standard Streams for local client-server communication](https://stackoverflow.com/questions/15368272/sockets-vs-standard-streams-for-local-client-server-communication) 首先在 UNIX-like 平台上，使用 stdin/stdout 和 socket 无异，那依然这么使用，很可能是这样的方式在
