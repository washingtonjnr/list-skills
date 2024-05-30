import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, firstValueFrom, of } from 'rxjs';
import { SkillType } from '../../types/skill.type';
import { sleep } from '../../utils/sleep';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiUrl = "api/skills";

  constructor(private httpClient: HttpClient) { }

  public async getSkills(): Promise<SkillType[]> {
    await sleep();

    const skills = await firstValueFrom(this.httpClient.get<SkillType[]>(this.apiUrl));

    return skills;
  }

  public updateLikes(id: number, count: number): Observable<SkillType> {
    return this.httpClient.post<SkillType>(`${this.apiUrl}/${id}`, { likes: count }).pipe(
      catchError(this.handleError<SkillType>('updateLikes'))
    );
  }

  // Método de tratamento de erro
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
