import { Component } from '@angular/core';
// Components
import { CardComponent } from '../../components/card/card.component';
import { LoadingComponent } from '../../components/loading/loading.component';
// Types
import { NgFor, NgIf } from '@angular/common';
import { SkillsService } from '../../services/skills/skills.service';
import { SkillType } from '../../types/skill.type';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    // Components
    CardComponent,
    LoadingComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public isLoading: boolean = true;
  public cards: Array<SkillType> = [];

  constructor(private skillsService: SkillsService) { }

  async ngOnInit() {
    this.isLoading = true;

    try {
      const skills = await this.skillsService.getSkills();

      this.cards = skills;
    } catch (error) {
      console.error('Erro ao carregar habilidades', error);

      alert('Erro ao carregar habilidades');
    } finally {
      this.isLoading = false;
    }
  }
}
