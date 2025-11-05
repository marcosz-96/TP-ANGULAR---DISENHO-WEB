import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { delay } from 'rxjs/operators'
import { Student } from 'src/app/models/student'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = `${environment.apiUrl}/student`
  
  // Datos mock en memoria
  private mockStudents: Student[] = [
    {
      id: 1,
      dni: '12345678',
      lastName: 'García',
      firstName: 'Juan',
      email: 'juan.garcia@example.com',
      cohort: 2024,
      status: 'activo',
      gender: 'masculino',
      address: 'Calle Falsa 123',
      phone: '123-456-7890'
    },
    {
      id: 2,
      dni: '87654321',
      lastName: 'López',
      firstName: 'María',
      email: 'maria.lopez@example.com',
      cohort: 2024,
      status: 'activo',
      gender: 'femenino',
      address: 'Avenida Principal 456',
      phone: '987-654-3210'
    },
    {
      id: 3,
      dni: '11223344',
      lastName: 'Rodríguez',
      firstName: 'Carlos',
      email: 'carlos.rodriguez@example.com',
      cohort: 2023,
      status: 'activo',
      gender: 'masculino',
      address: 'Boulevard Central 789',
      phone: '555-123-4567'
    }
  ]
  
  private nextId = 4

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    if (environment.useMock) {
      // Simular respuesta HTTP con delay
      return of([...this.mockStudents]).pipe(delay(300))
    }
    return this.http.get(this.url + '/getAll')
  }

  save(student: Student): Observable<any> {
    if (environment.useMock) {
      // Agregar nuevo estudiante con ID incremental
      const newStudent: Student = {
        ...student,
        id: this.nextId++
      }
      this.mockStudents.push(newStudent)
      // Simular respuesta exitosa
      return of({ message: 'Estudiante creado exitosamente', data: newStudent }).pipe(delay(300))
    }
    return this.http.post(this.url, student)
  }

  edit(student: Student): Observable<any> {
    if (environment.useMock) {
      // Buscar y actualizar estudiante
      const index = this.mockStudents.findIndex(s => s.id === student.id)
      if (index !== -1) {
        this.mockStudents[index] = { ...student }
        return of({ message: 'Estudiante actualizado exitosamente', data: student }).pipe(delay(300))
      }
      return of({ message: 'Estudiante no encontrado' }).pipe(delay(300))
    }
    return this.http.post(this.url + '/' + student.id + '/update', student)
  }

  delete(id: number): Observable<any> {
    if (environment.useMock) {
      // Eliminar estudiante del array
      const index = this.mockStudents.findIndex(s => s.id === id)
      if (index !== -1) {
        this.mockStudents.splice(index, 1)
        return of({ message: 'Estudiante eliminado exitosamente' }).pipe(delay(300))
      }
      return of({ message: 'Estudiante no encontrado' }).pipe(delay(300))
    }
    return this.http.post(this.url + '/' + id + '/delete', null)
  }
}
