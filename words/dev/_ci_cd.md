CI&CD 背后的思路就是，通过自动化的测试和部署机制，减少人为参与的频率，从而提高开发效率

CI 侧重的是自动化测试

CD 侧重的是自动化部署，其中： 

- Continuous Delivery 可以用在部署线上环境的场景下，因为它需要手动确认后再部署
- Continuous Deployment 可以用在部署开发环境的场景下，因为它是自动化部署

GitLab 的 CI&CD 图示：

![](https://docs.gitlab.com/ee/ci/introduction/img/gitlab_workflow_example_11_9.png)

对上图的细节进行展开后：

![](https://docs.gitlab.com/ee/ci/introduction/img/gitlab_workflow_example_extended_v12_3.png)
