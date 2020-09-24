import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Blog } from './blog';
import { mergeMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getByBusinessId(id: number) {
    return this.http.get<Blog[]>(`${environment.api}/blog/business/${id}`).pipe(
      mergeMap(blogs => {
        for (const blog of blogs) {
          blog.Content = this.removeHtmlBreak(blog.Content);
        }

        return of(blogs);
      })
    );
  }

  getById(id: number) {
    this.http.get<Blog>(`${environment.api}/blog/business/${id}`).pipe(
      mergeMap(blog => {
        blog.Content = this.removeHtmlBreak(blog.Content);
        return of(blog);
      })
    );
  }

  save(blog: Blog): Observable<Blog[]> {
    blog.Content = this.addHtmlBreak(blog.Content);

    if (blog.Id) {
      return this.http.put<Blog[]>(`${environment.api}/blog/${blog.Id}`, blog);
    } else {
      return this.http.post<Blog[]>(`${environment.api}/blog/business/${blog.BusinessId}`, blog);
    }
  }

  addHtmlBreak(val: string): string {
    if (!val) { return val; }
    return val.replace(/\n/g, '<br />').trim();
  }

  removeHtmlBreak(val: string): string {
    if (!val) { return val; }
    return val.replace(/<br \/>/g, '\n');
  }
}
