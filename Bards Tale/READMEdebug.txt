FaceMesh Nodding Debug Scaffold
--------------------------------
Purpose
  - Rapidly prototype and tune head-nod page-advance behavior using MediaPipe FaceMesh.
  - Visual target + adaptive threshold reduces accidental triggers while looking around.

How to use
  1. Serve the HTML file on a local server and open it in Chrome/Edge.
  2. Click Start Calibration and follow the on-screen flow.
  3. Enter READ mode and test nods while watching the control panel and Console logs.
  4. Tweak Base Threshold and Distance Scale until nods feel natural.
  5. Save baseline with Save Baseline (console) and copy the printed JSON.

Key knobs
  - NOD_BASE_THRESHOLD: base dy to arm a nod.
  - NOD_DISTANCE_SCALE: multiplier applied to gaze→target distance.
  - NOD_COOLDOWN_MS: ms before another nod can register.
  - SMOOTHING: gaze smoothing factor.
  - TARGET_RADIUS_PX: visual target size.

Integration notes
  - The scaffold exposes `applyPreset(name)` and the runtime globals:
    window.NOD_BASE_THRESHOLD, window.NOD_DISTANCE_SCALE, window.NOD_COOLDOWN_MS, window.SMOOTHING, window.TARGET_RADIUS_PX
  - Use `window.ENABLE_NOD_LOGGING = true` to capture `NOD DEBUG` lines for tuning.
