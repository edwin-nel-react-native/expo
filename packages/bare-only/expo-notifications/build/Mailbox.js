import { EventEmitter as NativeEventEmitter, NativeModulesProxy } from '@unimodules/core';
const { ExpoNotifications } = NativeModulesProxy;
const DeviceEventEmitter = new NativeEventEmitter(ExpoNotifications);
export class Mailbox {
    constructor() {
        this.onUserInteractionListeners = new Map();
        this.onForegroundNotificationListeners = new Map();
        this.onTokenChangeListener = null;
        DeviceEventEmitter.addListener('Expo.onUserInteraction', this.onUserInteraction.bind(this));
        DeviceEventEmitter.addListener('Expo.onForegroundNotification', this.onForegroundNotification.bind(this));
        DeviceEventEmitter.addListener('Expo.onTokenChange', this.onTokenChange.bind(this));
    }
    addOnUserInteractionListener(listenerName, listener) {
        this.onUserInteractionListeners.set(listenerName, listener);
    }
    addOnForegroundNotificationListener(listenerName, listener) {
        this.onForegroundNotificationListeners.set(listenerName, listener);
    }
    removeOnUserInteractionListener(listenerName) {
        this.onUserInteractionListeners.delete(listenerName);
    }
    removeOnForegroundNotificationListener(listenerName) {
        this.onForegroundNotificationListeners.delete(listenerName);
    }
    setOnTokenChangeListener(onTokenChangeListner) {
        this.onTokenChangeListener = onTokenChangeListner;
    }
    onForegroundNotification(notification) {
        for (let listener of this.onForegroundNotificationListeners.values()) {
            listener(notification);
        }
    }
    onUserInteraction(userInteraction) {
        for (let listener of this.onUserInteractionListeners.values()) {
            listener(userInteraction);
        }
    }
    onTokenChange(tokenMessage) {
        if (this.onTokenChangeListener != null) {
            this.onTokenChangeListener(tokenMessage.token);
        }
    }
}
//# sourceMappingURL=Mailbox.js.map