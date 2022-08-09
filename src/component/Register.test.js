import { render,screen,fireEvent, waitFor } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import { BrowserRouter } from "react-router-dom";
import Register from "./Register";

describe("Testing Register ", ()=>{
    it("Register",async ()=>{
        render(<BrowserRouter><Register/></BrowserRouter>);

        fireEvent.change(screen.getByTestId('firstName'),{target:{value:"Amit"}})
        fireEvent.change(screen.getByTestId('lastName'),{target:{value:"Mahamuni"}})
        fireEvent.change(screen.getByTestId('email'),{target:{value:"amit@gmail.com"}})
        fireEvent.change(screen.getByTestId('Password'),{target:{value:"Amit@123"}})
        fireEvent.change(screen.getByTestId('confirmPassword'),{target:{value:"Amit@123"}})
        fireEvent.change(screen.getByTestId('DateOfBirth'),{target:{value:"05-09-1998"}})
        fireEvent.click(screen.getByTestId('submit'))

    })
})