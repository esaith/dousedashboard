import { Component, OnInit } from '@angular/core';
import { Blog } from '../entities/blog';
import { BlogService } from '../entities/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  businessId: number;
  blogs: Array<Blog>;
  newBlog: Blog;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    if (!isNaN(id)) {
      this.businessId = id;
      this.blogService.getByBusinessId(this.businessId).subscribe(blogs => this.blogs = blogs);
    }
  }

  createNewBlog() {
    if (!this.newBlog) {
      this.newBlog = new Blog();
      this.newBlog.BusinessId = this.businessId;
    }
  }

  save() {
    if (!this.newBlog.Title) {
      this.snackBar.open('Please include a title prior to saving.', '', {
        duration: 3000
      });

      return;
    }

    if (!this.newBlog.Content) {
      this.snackBar.open('Please include content prior to saving.', '', {
        duration: 3000
      });

      return;
    }


    this.snackBar.open('Saving blog');
    this.newBlog.BusinessId = this.businessId;
    this.blogService.save(this.newBlog).pipe(
      catchError((error, caught) => {
        this.snackBar.open('Failed to save blog :(', '', {
          duration: 3000
        });
        return of(null);
      })
    ).subscribe(blogs => {
      if (blogs) {
        this.blogs = blogs;
        this.snackBar.open('Save complete.', '', {
          duration: 3000
        });

        this.newBlog = null;
      }
    });
  }

  beforeNavigate(pageToNavigate: string) {
    this.router.navigate([`${pageToNavigate}/${this.businessId}`]);
  }

  editBlog(blog: Blog) {
    this.newBlog = blog;
  }
}
