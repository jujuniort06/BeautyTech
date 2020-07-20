import { Injectable } from '@angular/core';
import { BTObjectUtils } from './BTObjectUtils';

declare var Notification: any;

@Injectable()
export class BTDesktopNotificationService {
    private soundInterval : any;

    constructor (){

    }

    private requestAutorization() {        
        Notification.requestPermission(p => {
            if (p === 'denied'){
                alert('Você não permitiu que nós notificassemos você. :(');            
            }
        });
    }

    public playSound(){
        let audio = new Audio('./assets/sound/sound.wav');
    
        audio.play();
      }

    private verifyPermission() : boolean {
        if (Notification.permission === 'default'){
          this.requestAutorization();
          return true;
        }

        if (Notification.permission === 'denied'){
            return false;
        }

        return true;
    }

    public notify(title : string, messasge : string, playSound : boolean = true, persistend : boolean = false){        
        if (this.verifyPermission()){
            var notification = new Notification(title, {body:messasge});
        }
        
        if (playSound){
            this.playSound();
        }

        if (!persistend){
            return;
        }
        
        this.stop();
        this.soundInterval = setInterval(() => {            
            this.playSound();
        }, 5000);
    }

    public stop(){
        if (BTObjectUtils.isNullOrUndefined(this.soundInterval)){
            return;
        }
        
        clearInterval(this.soundInterval);
    }
}