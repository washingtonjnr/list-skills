import { Component, Input } from '@angular/core';
// Material
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
// Components
import { NgClass, NgStyle } from '@angular/common';
import { SkillsService } from '../../services/skills/skills.service';
import { SkillType } from '../../types/skill.type';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    //
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatIconModule,
    //
    ButtonComponent,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card: any;

  constructor(private skillsService: SkillsService) {}

  public getVariant(likes: number): string {
    if(likes < 5) {
      return 'outline';
    } else if(likes < 10) {
      return '';
    } else {
      return 'dark';
    }
  }

  public onInteraction(card: SkillType, action: 'like' | 'dislike') {
    if(card.likes <= 0 && action === 'dislike') {
      return;
    }

    const newCountLikes = (card.likes + (action === 'like' ? 1 : -1));

    this.skillsService.updateLikes(card.id, newCountLikes).subscribe(() => {
      this.card.likes = newCountLikes;
    });
  }
}
