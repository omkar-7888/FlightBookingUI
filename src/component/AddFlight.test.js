import { render,screen,fireEvent, waitFor } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import { BrowserRouter } from "react-router-dom";
import AddFlight from "./AddFlight";


describe("Testing AddFlight",()=>{
    it("AddFlight",async ()=>{
        render(<BrowserRouter><AddFlight/></BrowserRouter>);

        fireEvent.change(screen.getByTestId('Enter Flight Name'),{target:{value:'Vistara'}})
        fireEvent.change(screen.getByTestId('Flight Start From'),{target:{value:'Mumbai'}})
        fireEvent.change(screen.getByTestId('Enter Flight Destination'),{target:{value:'Bangalore'}})
        fireEvent.change(screen.getByTestId('Enter Flight Date'),{target:{value:'22-08-2022'}})
            fireEvent.click(screen.getByTestId('submit'))
    })
})