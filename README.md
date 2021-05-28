# Example Prisma / Next / Next-Auth Monorepo with API and APP services

## Quickstart

1. Create a new Postgres database, and either provision it with the raw queries provided on the Next-Auth site, or with Prisma.
1. Copy `.env.example` files within the `api` and `app` services, and fill them out with both the database URL and mailer settings (for magic links).
1. Run the API service with its the `start` script.
1. Run the APP service with its the `start` script.
1. Visit http://localhost:4000 and sign in with an email address.
1. Uncomment line 19 in `services/app/src/pages/api/auth/[...nextauth].ts`.
1. Visit http://localhost:4000 again. It should immediately redirect you to the login page and throw an error in the console.