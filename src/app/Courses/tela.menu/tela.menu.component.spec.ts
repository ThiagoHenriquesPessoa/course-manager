import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaMenuComponent } from './tela.menu.component';

describe('TelaMenuComponent', () => {
  let component: TelaMenuComponent;
  let fixture: ComponentFixture<TelaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
