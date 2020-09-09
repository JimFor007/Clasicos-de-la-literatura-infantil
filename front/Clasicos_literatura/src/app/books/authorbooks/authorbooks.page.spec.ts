import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthorbooksPage } from './authorbooks.page';

describe('AuthorbooksPage', () => {
  let component: AuthorbooksPage;
  let fixture: ComponentFixture<AuthorbooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorbooksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthorbooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
