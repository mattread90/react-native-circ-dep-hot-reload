# react-native-circ-dep-hot-reload
Simple React Native project that contains a module with a circular dependency which causes a call stack exception when using Hot Reloading

### To re-create issue:
Run `react-native run-ios`, open the debug menu in the simulator and enable Hot Reloading and remote JS debugging. Re-save the `modue-with-circ-dep/PIComp.js` file to trigger a hot reload. You should see repeated console logs of `[React Transform HMR] Patching circularDependencies` in the debugger before a 'Maximum call stack size exceeded' exception.
