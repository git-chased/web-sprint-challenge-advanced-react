// Write your tests here
import React from "react";
import axios from "axios";
import AppFunctional from "./AppFunctional";
import {render, fireEvent, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'

describe('AppFunctional Component', ()=> {
  test('Initial Rendering Test', () => {
    render(<AppFunctional />)
    expect(screen.getByText('Coordinates (2, 2)')).toBeInTheDocument()
    expect(screen.getByText('You moved 0 times')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
  })
  test('Reset Function Test', () => {
    render(<AppFunctional />)
    fireEvent.click(up);
    fireEvent.click(reset)
    expect(screen.getByText('Coordinates (2, 2)')).toBeInTheDocument()
    expect(screen.getByText('You moved 0 times')).toBeInTheDocument()
  })
  test('Move UP Function Test', () => {
    render(<AppFunctional />)
    fireEvent.click(up);
    expect(screen.getByText('Coordinates (2, 1)')).toBeInTheDocument()
    expect(screen.getByText('You moved 1 time')).toBeInTheDocument()
  })
  test ('Move DOWN Function Test', () => {
    render(<AppFunctional />)
    fireEvent.click(down);
    expect(screen.getByText('Coordinates (2, 3)')).toBeInTheDocument()
  })
})