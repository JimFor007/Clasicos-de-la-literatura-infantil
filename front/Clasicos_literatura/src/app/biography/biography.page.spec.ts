import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BiographyPage } from './biography.page';

describe('BiographyPage', () => {
  let component: BiographyPage;
  let fixture: ComponentFixture<BiographyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiographyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BiographyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
