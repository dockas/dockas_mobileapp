PHONY: default

a: index.android.js
	react-native run-android

i: index.ios.js
	react-native run-ios
