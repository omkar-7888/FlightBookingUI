import { render,screen,fireEvent, waitFor } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import { BrowserRouter } from "react-router-dom";
import UpdateFlight from "./UpdateFlight";


describe("Testing UpdateFlight",()=>{
    it("UpdateFlight",async ()=>{
        render(<BrowserRouter><UpdateFlight/></BrowserRouter>);

        fireEvent.change(screen.getByTestId('Enter Flight Name'),{target:{value:'Vistara'}})
        fireEvent.change(screen.getByTestId('Flight Start From'),{target:{value:'Mumbai'}})
        fireEvent.change(screen.getByTestId('Enter Flight Destination'),{target:{value:'Pune'}})
        fireEvent.change(screen.getByTestId('Enter Flight Date'),{target:{value:'22-08-2022'}})
        fireEvent.change(screen.getByTestId('Enter Flight Id'),{target:{value:'171I'}})

            fireEvent.click(screen.getByTestId('submit'))
    })
})