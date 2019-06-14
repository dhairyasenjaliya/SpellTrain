package com.navigation;

import android.app.Application;

import com.facebook.react.ReactApplication;
import co.apptailor.googlesignin.RNGoogleSigninPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;

import io.invertase.firebase.RNFirebasePackage;

import org.reactnative.camera.RNCameraPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import co.apptailor.googlesignin.RNGoogleSigninPackage; 

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk; 

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import com.airbnb.android.react.maps.MapsPackage;

import com.oblador.vectoricons.VectorIconsPackage;

import io.invertase.firebase.firestore.RNFirebaseFirestorePackage; 
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;

import io.invertase.firebase.auth.RNFirebaseAuthPackage;

import com.masteratul.exceptionhandler.ReactNativeExceptionHandlerPackage;

import com.quenice.reactnative.RNCardViewPackage;
import org.reactnative.camera.RNCameraPackage;

import java.util.Arrays;
import java.util.List;

import org.devio.rn.splashscreen.SplashScreenReactPackage;
 
public class MainApplication extends NavigationApplication { 

  private static CallbackManager mCallbackManager = CallbackManager.Factory.create(); 
  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }
  
  @Override
  protected ReactGateway createReactGateway() {
    ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
      @Override
      protected String getJSMainModuleName() {
        return "index";
      }
    };
    return new ReactGateway(this, isDebug(), host);
  }

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
        new ReactNativeExceptionHandlerPackage(),

        new RNCardViewPackage(),

        new RNCameraPackage(),
        new MainReactPackage(),
        new RNGoogleSigninPackage(),
 
        new FBSDKPackage(mCallbackManager),

        new RNFirebasePackage(), 
        new RNFirebaseMessagingPackage(),
        new RNFirebaseNotificationsPackage(),
        new RNFirebaseFirestorePackage(),
        
        new RNFirebaseAuthPackage(),

        new SplashScreenReactPackage() ,

        new MapsPackage() ,

        new VectorIconsPackage()
    );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }
  
}