import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainDragdropComponent } from './main-dragdrop.component';

describe('MainDragdropComponent', () => {
  let component: MainDragdropComponent;
  let fixture: ComponentFixture<MainDragdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDragdropComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDragdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
