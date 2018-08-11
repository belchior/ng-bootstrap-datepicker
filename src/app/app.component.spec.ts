import { TestBed, async } from '@angular/core/testing';
import { DatepickerModule } from './datepicker';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DatepickerModule ],
      declarations: [ AppComponent ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
