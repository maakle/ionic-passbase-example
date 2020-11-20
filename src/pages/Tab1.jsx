import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
} from "@ionic/react";
import "./Tab1.css";
import VerifyButton from "@passbase/button/react";

const Tab1 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab vertical="center" horizontal="center">
          <VerifyButton
            apiKey={
              "ebb8c2f2c2b27d10a1dfdf1bd0a882455b0f5cfcfd37f2a9020d24cfbe08feaa"
            }
            onFinish={(identityAccessKey) => {}}
            onError={(errorCode) => {}}
            onStart={() => {}}
          />
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
