import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturaLibroPage } from './lectura-libro.page';

describe('LecturaLibroPage', () => {
  let component: LecturaLibroPage;
  let fixture: ComponentFixture<LecturaLibroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturaLibroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturaLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
