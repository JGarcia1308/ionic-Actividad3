import './ExploreContainer.css';
import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonInput, IonItem, IonLabel } from '@ionic/react';


interface ContainerProps {
  name: string;
}
     
const CurrencyExchangeCard: React.FC = () => {
        const [amount, setAmount] = useState('');
        const [rate, setRate] = useState('');
        const [convertedAmount, setConvertedAmount] = useState('');

        const calculateExchange = () => {
          const converted = Number(amount) * Number(8);
          setConvertedAmount(converted.toFixed(2));
        };

        return (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Calculo de Conversion</IonCardTitle>
              <IonCardSubtitle>Conversion de Moneda</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonLabel position="floating">Cantidad $</IonLabel>
                <IonInput type="number" value={amount} onIonChange={(e) => setAmount(e.detail.value!)}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Tipo de Cambio Q</IonLabel>
                <IonInput type="number" value={8} readonly></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Cantidad Convertida Q</IonLabel>
                <IonInput type="text" value={convertedAmount} readonly></IonInput>
              </IonItem>
              <IonItem>
                <IonButton expand='full' onClick={calculateExchange}>Calcular</IonButton>
              </IonItem>              
            </IonCardContent>
          </IonCard>
        );
      };    

export default CurrencyExchangeCard;
