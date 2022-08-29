class Event {
    constructor(name, description, date) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.availableTickets = [];
    };

    addAvailableTickets = (ticketName, price) => {
        this.availableTickets.push(new TicketType(ticketName, price));
    };

    allTickets = () => {
        let ticketStatement = "All tickets: "
        for(let i = 0; i < this.availableTickets.length; i++) {
            ticketStatement += `${i+1}. ${this.availableTickets[i].name} ($${this.availableTickets[i].price}) `;
        }
        return ticketStatement;
    };

    searchTickets = (lower, upper) => {
        if(lower === upper || lower < 0 || upper < 0) {
            return "Invalid range";
        }
        let ticketStatement = "Eligible tickets: "
        let counter = 1;
        for(let i = 0; i < this.availableTickets.length; i++) {
            if(this.availableTickets[i].price >= lower && this.availableTickets[i].price <= upper){
                ticketStatement += `${counter}. ${this.availableTickets[i].name} ($${this.availableTickets[i].price}) `;
                counter++; 
            }
        }
        if(counter === 1){
            return "No tickets available";
        }
        return ticketStatement;
    };

    cheapestTicket = () => {
        if(this.availableTickets.length === 0){
            this.cheapest = "No tickets available"
            return this.cheapest;
        } else {
            this.cheapest = this.availableTickets.reduce((a,b) => {return a.price < b.price ? `${a.name} ($${a.price})` : `${b.name} ($${b.price})`});
            return this.cheapest;
        }
       
    };
}

class TicketType {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

const eventObj1 = new Event (
    'KLOS Golden Gala',
    'An evening with hollywood vampires',
    'August, 15, 2022'
);

const eventObj2 = new Event (
    'Skillet & Sevendust',
    'Victorious war tour',
    'July 1, 2022'
)

const eventObj3 = new Event(
    'Jenny Lewis',
    'On the line tour 2019',
    'March 3, 1999'
)

const eventArray = new Array();

eventArray.push(eventObj1, eventObj2, eventObj3);
console.log(eventArray);

eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);

eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);

//array of available tickets
console.log(eventObj2.availableTickets);
console.log(eventObj3.availableTickets);

//ticket searcher
console.log(eventObj3.searchTickets(0, 250));
console.log(eventObj3.searchTickets(0, 100));
console.log(eventObj3.searchTickets(150, 300));
console.log(eventObj3.searchTickets(0, 350));
console.log(eventObj3.searchTickets(0, 99));


document.addEventListener('DOMContentLoaded', () => {
    let html = '';
    eventArray.forEach((item) => {
        html += `<li>${item.name} - ${item.description} - ${item.date} - ${item.allTickets()}<br>Cheapest Ticket: ${item.cheapestTicket()}`; 
    });
    document.querySelector('#event').innerHTML = html;
});
