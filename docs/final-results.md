Uncertainty-Aware Target-Following Robot — Experiment Findings

In the saved test trials, the baseline run achieved 160.80 px tracking RMSE with 26.7% detection rate and 0 collisions. Under high sensor noise, tracking RMSE became 157.77 px, 1.9% lower than baseline. In the line-of-sight blocked case, the blocked-rate was 100.0%, confirming that the camera model does not see through obstacles. In dense obstacles, A* explored 16.6 nodes versus Dijkstra's 38.6, giving a 57.1% node reduction. With dynamic obstacles enabled, the planner triggered 401 replans while recording 0 collisions.

Saved trial summary:
- [TESTING] baseline: RMSE 160.80 px, detection 26.7%, LOS blocked 72.7%, A* nodes 3.4, Dijkstra nodes 23.8, A* saving 85.7%, replans 0, collisions 0.
- [TESTING] baseline: RMSE 322.50 px, detection 55.3%, LOS blocked 24.5%, A* nodes 34.3, Dijkstra nodes 127.7, A* saving 73.1%, replans 0, collisions 0.
- [TESTING] baseline: RMSE 131.04 px, detection 31.7%, LOS blocked 62.1%, A* nodes 3.6, Dijkstra nodes 22.4, A* saving 84.1%, replans 0, collisions 0.
- [TESTING] baseline: RMSE 0.00 px, detection 0.0%, LOS blocked 100.0%, A* nodes 0.0, Dijkstra nodes 0.0, A* saving --, replans 0, collisions 0.
- [TESTING] baseline: RMSE 162.18 px, detection 60.2%, LOS blocked 23.8%, A* nodes 10.7, Dijkstra nodes 46.7, A* saving 77.0%, replans 0, collisions 0.
- [TESTING] high_noise: RMSE 157.77 px, detection 46.0%, LOS blocked 33.5%, A* nodes 10.1, Dijkstra nodes 57.4, A* saving 82.4%, replans 0, collisions 0.
- [TESTING] line_of_sight_blocked: RMSE 0.00 px, detection 0.0%, LOS blocked 100.0%, A* nodes 0.0, Dijkstra nodes 0.0, A* saving --, replans 0, collisions 0.
- [TESTING] line_of_sight_blocked: RMSE 0.00 px, detection 0.0%, LOS blocked 100.0%, A* nodes 0.0, Dijkstra nodes 0.0, A* saving --, replans 0, collisions 0.
- [TESTING] line_of_sight_blocked: RMSE 297.22 px, detection 40.9%, LOS blocked 40.8%, A* nodes 15.7, Dijkstra nodes 76.0, A* saving 79.4%, replans 0, collisions 0.
- [TESTING] line_of_sight_blocked: RMSE 332.09 px, detection 29.5%, LOS blocked 59.5%, A* nodes 18.5, Dijkstra nodes 69.8, A* saving 73.5%, replans 0, collisions 0.
- [TESTING] dense_obstacles: RMSE 119.12 px, detection 56.4%, LOS blocked 22.0%, A* nodes 16.6, Dijkstra nodes 38.6, A* saving 57.1%, replans 0, collisions 0.
- [TESTING] dynamic_obstacles: RMSE 475.28 px, detection 1.4%, LOS blocked 94.5%, A* nodes 57.5, Dijkstra nodes 131.9, A* saving 56.4%, replans 401, collisions 0.

Generated from real saved trials in the browser dashboard.
