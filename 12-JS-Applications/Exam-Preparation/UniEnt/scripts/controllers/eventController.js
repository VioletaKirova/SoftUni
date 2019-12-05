import { getSessionInfo, partials } from "../common.js";
import { get, post, put, del } from "../requester.js";

export function getCreate(ctx) {
  getSessionInfo(ctx);

  this.loadPartials(partials).partial("./templates/evt/create.hbs");
}

export function postCreate(ctx) {
  getSessionInfo(ctx);

  const { name, dateTime, description, imageURL } = ctx.params;

  const data = {
    name,
    dateTime,
    description,
    imageURL,
    peopleInterestedIn: 0,
    organizer: `${ctx.username}`
  };

  post("appdata", "events", data, "Kinvey")
    .then(() => {;
      ctx.redirect("#/");
    })
    .catch(console.error);
}

export function getDetails(ctx) {
  getSessionInfo(ctx);

  get("appdata", `events/${ctx.params.id}`, "Kinvey")
    .then(data => {
      ctx.evt = data;
      ctx.isCreator = data._acl.creator == ctx.userId;

      this.loadPartials(partials).partial("./templates/evt/details.hbs");
    })
    .catch(console.error);
}

export function getEdit(ctx) {
  getSessionInfo(ctx);

  get("appdata", `events/${ctx.params.id}`, "Kinvey").then(data => {
    ctx.evt = data;

    this.loadPartials(partials).partial("./templates/evt/edit.hbs");
  });
}

export function postEdit(ctx) {
  getSessionInfo(ctx);

  const {
    id,
    name,
    dateTime,
    description,
    imageURL,
    peopleInterestedIn,
    organizer
  } = ctx.params;

  const data = {
    name,
    dateTime,
    description,
    imageURL,
    peopleInterestedIn,
    organizer
  };

  put("appdata", `events/${id}`, data, "Kinvey")
    .then(() => {
      ctx.redirect(`#/details/${id}`);
    })
    .catch(console.error);
}

export function processDelete(ctx) {
  del("appdata", `events/${ctx.params.id}`, {}, "Kinvey")
    .then(() => {
      ctx.redirect("#/");
    })
    .catch(console.error);
}

export function processJoin(ctx) {
  get("appdata", `events/${ctx.params.id}`, "Kinvey")
    .then(data => {
      data.peopleInterestedIn++;

      put("appdata", `events/${ctx.params.id}`, data, "Kinvey")
        .then(() => {
          ctx.redirect(`#/details/${ctx.params.id}`);
        })
        .catch(console.error);
    })
    .catch(console.error);
}
