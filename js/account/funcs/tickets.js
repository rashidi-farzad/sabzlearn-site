import { getToken } from "./../../funcs/utils.js";
const getAndShowAllUserTickets = async () => {
  const ticketsListWrapper = document.querySelector(".ticket-content");
  const ticketCounterElem = document.querySelector(".ticket-content__title");
  const res = await fetch(`http://localhost:4000/v1/tickets/user`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const tickets = await res.json();
  ticketCounterElem.innerHTML = `نمایش ${tickets.length} تیکت`;
  if (tickets.length) {
    tickets.forEach((ticket) => {
      ticketsListWrapper.insertAdjacentHTML(
        "beforeend",
        `
            <div class="ticket-content__box">
                    <div class="ticket-content__right">
                      <div class="ticket-content__right-right">
                        <a class="ticket-content__link" href="#">عضو شدن در گروه تلگرامی دوره ریکت</a>
                        <span class="ticket-content__category">
                          <svg class="svg-inline--fa fa-ellipsis-v fa-w-6 ticket-content__icon" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="ellipsis-v" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" data-fa-i2svg=""><path fill="currentColor" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path></svg><!-- <i class="fa fa-ellipsis-v ticket-content__icon"></i> Font Awesome fontawesome.com -->
                          پشتیبانی دوره ها</span>
                      </div>
                      <div class="ticket-content__right-left">
                        <span class="ticket-content__name">محمدامین سعیدی راد</span>
                      </div>
                    </div>
                    <div class="ticket-content__left">
                      <div class="ticket-content__left-right">
                        <div class="ticket-content__condition">
                          <span class="ticket-content__condition-text">پاسخ داده شده</span>
                        </div>
                      </div>
                      <div class="ticket-content__left-left">
                        <span class="ticket-content__time">2022/04/08</span>
                        <span class="ticket-content__time-month">8 ماه قبل</span>
                      </div>
                    </div>
                  </div>
            `,
      );
    });
  } else {
    ticketsListWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <div class="alert alert-danger">هیچ تیکتی ثبت نکردید!</div>
        `,
    );
  }
};
export { getAndShowAllUserTickets };
