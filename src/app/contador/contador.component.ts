import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit, OnDestroy {
  private countdownSubscription!: Subscription;
  public audioPlayer: any;
  private endDate: Date = new Date('2023-11-25T08:00:00');
  dataEvento: Date = new Date('2023-11-25'); 
  diasRestantes: number | undefined;
  days: number | undefined;
  hours: number | undefined;
  minutes: number | undefined;
  seconds: number | undefined;
  audioPath = 'assets/tick-tock.mp3'; 

  ngOnInit() {
    this.initializeCountdown();
    this.calcularDiasRestantes();
  }
  ngOnDestroy() {
    this.countdownSubscription.unsubscribe();
  }
  calcularDiasRestantes() {
    const hoje = new Date();
    const diferencaTempo = this.dataEvento.getTime() - hoje.getTime();
    this.diasRestantes = Math.ceil(diferencaTempo / (1000 * 3600 * 24));
  }
  private initializeCountdown() {
    this.countdownSubscription = interval(1000).subscribe(() => {
      const now = new Date();
      const difference = this.endDate.getTime() - now.getTime();

      this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        this.countdownSubscription.unsubscribe();
        // Pode adicionar lógica adicional quando a contagem regressiva atinge zero
      }

      // Adicionar a lógica para tocar o som aqui
      const audioPlayer: HTMLAudioElement | null = document.querySelector('audio');

      if (audioPlayer) {
        audioPlayer.play();
      }
});}
}
