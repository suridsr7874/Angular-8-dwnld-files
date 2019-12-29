import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('My test cases', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],imports:[FormsModule]
    }).compileComponents();
  }));

  it('Username Empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.t1=""
    app.fun1()
    expect(app.res).toBe("Enter Username");
  });
  it("Password case",()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.t2=""
    app.fun1()
    expect(app.res).toBe("Password must")
  })
});
