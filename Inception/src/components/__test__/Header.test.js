import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '../Header';
import { BrowserRouter } from 'react-router-dom';
import { Provider} from 'react-redux';
import store from '../../redux/appStore';

describe('Header Component Test Case', () => {
  it('Should render Header Component with Login Button', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('Should render a Heaer Component with Cart link with 0 items', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cart = screen.getByText(/Cart/);

    expect(cart).toBeInTheDocument();
  });

  it('Should Change Login Button to Logout Button on Click in Header Component', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"})

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", {name: "Logout"})

    expect(logoutButton).toBeInTheDocument()

  })

});
