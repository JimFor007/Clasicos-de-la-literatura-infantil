import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllbooksPage } from './allbooks.page';

describe('AllbooksPage', () => {
  let component: AllbooksPage;
  let fixture: ComponentFixture<AllbooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbooksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllbooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
