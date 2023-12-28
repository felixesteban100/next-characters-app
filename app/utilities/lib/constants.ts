export const CHARACTERS_PER_PAGE = 12;
export const CHARACTERS_PER_PAGE_NOPAGINATION = 4

export const STORAGE_KEY = 'next-characters-app'

export const ALLRACES = [
  { value: "All", name: "All races" },
  { value: "Human", name: "Human 🌎" },
  { value: "Metahuman", name: "Metahuman 🧬" },
  { value: "Alien", name: "Alien 👽" },
  { value: "Kryptonian", name: "Kryptonian 👽" },
  { value: "Symbiote", name: "Symbiote 👽" },
  { value: "Mutant", name: "Mutant 🧬" },
  { value: "Atlantean", name: "Atlantean 🐟" },
  { value: "Demon", name: "Demon 😈" },
  { value: "Android", name: "Android 🤖" },
  { value: "Cyborg", name: "Cyborg 🤖" },
  { value: "Animal", name: "Animal 🥦" },
  { value: "Zombie", name: "Zombie 🧟‍♂️🧟‍♀️" },
  { value: "Amazon", name: "Amazon 🥦" },
  { value: "Eternal", name: "Eternal 👽" },
  { value: "Inhuman", name: "Inhuman 🧬" },
  { value: "Asgardian", name: "Asgardian 👽" },
  { value: "Cosmic Entity", name: "Cosmic Entity 🌌" },
];

export const ALLALIGMENTS = [
  {
    value: "All",
    name: "All aligments",
  },
  {
    value: "good",
    name: "Hero 😃",
  },
  {
    value: "bad",
    name: "Villain 😡",
  },
  {
    value: "neutral",
    name: "Anti-hero 😐",
  },
];

export const ALLGENDERS = [
  {
    value: "both",
    name: "Both genders",
  },
  {
    value: "Female",
    name: "Female 🚺",
  },
  {
    value: "Male",
    name: "Male 🚹",
  },
];

export const UNIVERSES_WITH_TEAMS = ["Marvel Comics", "DC Comics", "Dark Horse Comics", "IDW Publishing", "Shueisha", "Warner Bros", "Super Sentai", "SEGA"]


export const ALLUNIVERSE = [
  { value: "All", name: "All universes" },
  { value: "Marvel Comics", name: "Marvel" },
  { value: "DC Comics", name: "DC" },
  { value: "Shueisha", name: "Shueisha" },
  { value: "Dark Horse Comics", name: "Dark Horse Comics" },
  { value: "George Lucas", name: "George Lucas" },
  { value: "SEGA", name: "SEGA" },
  { value: "IDW Publishing", name: "IDW Publishing" },
  { value: "Image Comics", name: "Image Comics" },
  { value: "Warner Bros", name: "Warner Bros" },
  { value: 'Super Sentai', name: 'Super Sentai' },
  // { value: "Angel", name: "Angel" },
  { value: "NBC - Heroes", name: "NBC - Heroes" },
  { value: "Tempest", name: "Tempest" },
  { value: "SyFy", name: "SyFy" },
  { value: "ABC Studios", name: "ABC Studios" },
  { value: "Icon Comics", name: "Icon Comics" },
  { value: "Universal Studios", name: "Universal Studios" },
  { value: "Gemini V", name: "Gemini V" },
  { value: "Star Trek", name: "Star Trek" },
  // { value: "Goliath", name: "Goliath" },
  // { value: "Deadpool", name: "Deadpool" },
  { value: "Wildstorm", name: "Wildstorm" },
  { value: "South Park", name: "South Park" },
  { value: "Sony Pictures", name: "Sony Pictures" },
  { value: "Vindicator II", name: "Vindicator II" },
  { value: "Titan Books", name: "Titan Books" },
  { value: "J. K. Rowling", name: "J. K. Rowling" },
  { value: "Microsoft", name: "Microsoft" },
  // { value: "She-Thing", name: "She-Thing" },
  { value: "Rebellion", name: "Rebellion" },
  { value: "J. R. R. Tolkien", name: "J. R. R. Tolkien" },
  { value: "Carolco Pictures", name: "Carolco Pictures" },
  { value: "ARK corporation", name: "ARK corporation" },
  { value: "Paramount Pictures", name: "Paramount Pictures" },
  { value: "-", name: "-" },
  // { value: null, name: "null" },
  { value: "Real people", name: "Real people" },

  //
];

export function getTeamByUniverse(universe: string): { name: string, value: string, img: string }[] {
  switch (universe) {
    case "Marvel Comics":
      return [
        {
          name: "Asgardians",
          value: "Asgardians",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a21c2816-49d4-4a5b-b6db-7634a5ea8671/deqsmlv-740da833-0582-4672-9c63-a58f1f79565c.png/v1/fill/w_638,h_604/asgard_logo_by_spiderbyte64_deqsmlv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjA0IiwicGF0aCI6IlwvZlwvYTIxYzI4MTYtNDlkNC00YTViLWI2ZGItNzYzNGE1ZWE4NjcxXC9kZXFzbWx2LTc0MGRhODMzLTA1ODItNDY3Mi05YzYzLWE1OGYxZjc5NTY1Yy5wbmciLCJ3aWR0aCI6Ijw9NjM4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.R5bMAGrtXXim7EM_A84hkucgZewYCUOzB8_Uevmkwlc",
        },
        {
          name: "Avengers",
          value: "Avengers",
          img: "https://1000logos.net/wp-content/uploads/2019/05/Avengers-Logo-2015.png",
        },
        {
          name: "Avengers-Original",
          value: "Avengers-Original",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/627fe721-846f-4f75-ac61-111ca00b27dd/dd5vtke-4242c01a-acb6-49d6-8952-5f78313b7da0.png/v1/fill/w_1280,h_603/avengers__2019_logo__by_alanmac95_dd5vtke-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAzIiwicGF0aCI6IlwvZlwvNjI3ZmU3MjEtODQ2Zi00Zjc1LWFjNjEtMTExY2EwMGIyN2RkXC9kZDV2dGtlLTQyNDJjMDFhLWFjYjYtNDlkNi04OTUyLTVmNzgzMTNiN2RhMC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.D_rCPgMAzwI7axRhtrx9tzc24PXQR0lRzU637xqkkoA",
        },
        {
          name: "Black Order",
          value: "Black Order",
          img: "https://static.wikia.nocookie.net/marveldatabase/images/0/0a/Black_Order_Vol_1_Logo.png/revision/latest/scale-to-width-down/908?cb=20200419201606",
        },
        {
          name: "Brotherhood of Evil Mutants",
          value: "Brotherhood of Evil Mutants",
          img: "https://i.pinimg.com/564x/1a/65/39/1a6539168939ad87492441851f5f6160.jpg",
        },
        {
          name: "Dark avengers",
          value: "Dark avengers",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02b60eed-d9c8-4b8e-b826-3ed0694bcf26/deezys0-ad61e4e7-f0b7-458c-a304-ce6a82883302.png/v1/fill/w_1181,h_591/dark_avengers_logo_by_lyriumrogue_deezys0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkxIiwicGF0aCI6IlwvZlwvMDJiNjBlZWQtZDljOC00YjhlLWI4MjYtM2VkMDY5NGJjZjI2XC9kZWV6eXMwLWFkNjFlNGU3LWYwYjctNDU4Yy1hMzA0LWNlNmE4Mjg4MzMwMi5wbmciLCJ3aWR0aCI6Ijw9MTE4MSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WGNpBaikwouoeHzsLf0ywqFGVrJKaErqEjuquOdU-14",
        },
        {
          name: "Defenders",
          value: "Defenders",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c566b360-dcc0-4f8d-8154-05e8123d0d36/d6nq2rp-d52122fd-909a-4eaa-963e-3268cc5595a8.png/v1/fill/w_1024,h_442,q_80,strp/marvel_s_the_defenders___logo_by_mrsteiners_d6nq2rp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDQyIiwicGF0aCI6IlwvZlwvYzU2NmIzNjAtZGNjMC00ZjhkLTgxNTQtMDVlODEyM2QwZDM2XC9kNm5xMnJwLWQ1MjEyMmZkLTkwOWEtNGVhYS05NjNlLTMyNjhjYzU1OTVhOC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MFsU6vsmf_xeeiPuf_qwGy6HrYqunWGwqxJEs6JJql8",
        },
        {
          name: "Fantastic Four",
          value: "Fantastic Four",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82d0ec62-144a-47ae-aebb-f112f2a3b50b/ddghfpv-954536f0-f6f2-45c9-9f3a-468e21363b42.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyZDBlYzYyLTE0NGEtNDdhZS1hZWJiLWYxMTJmMmEzYjUwYlwvZGRnaGZwdi05NTQ1MzZmMC1mNmYyLTQ1YzktOWYzYS00NjhlMjEzNjNiNDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cfqvk-n8nviTwKKScn8a-iJ-Qx1sR_fa9DWOKXx9TBA",
        },
        {
          name: "Fantastic Four-Original",
          value: "Fantastic Four-Original",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Fantastic_Four_logo_%28blue_and_white%29.svg/800px-Fantastic_Four_logo_%28blue_and_white%29.svg.png",
        },
        {
          name: "Future Foundation",
          value: "Future Foundation",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a499871d-b693-45f6-ae90-f9451fff00da/d8qujky-26fe2e98-50ca-4bf2-8bbd-eb2ff034ae7e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E0OTk4NzFkLWI2OTMtNDVmNi1hZTkwLWY5NDUxZmZmMDBkYVwvZDhxdWpreS0yNmZlMmU5OC01MGNhLTRiZjItOGJiZC1lYjJmZjAzNGFlN2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Fe-uzIK474LCq2QnBzXM7ge6m-TfBFonIv5WIJ-3_rc",
        },
        {
          name: "Guardians of the Galaxy",
          value: "Guardians of the Galaxy",
          img: "https://static.wikia.nocookie.net/logopedia/images/2/2d/GOTG_merch_logo.png/revision/latest/scale-to-width-down/1200?cb=20190430131028",
        },
        {
          name: "Heroes For Hire",
          value: "Heroes For Hire",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b6361af-d2ac-439d-a6fe-b3d69bba2a56/ddvf1p0-bfe256b5-cdf6-4e9d-8536-30ed5f48850b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNiNjM2MWFmLWQyYWMtNDM5ZC1hNmZlLWIzZDY5YmJhMmE1NlwvZGR2ZjFwMC1iZmUyNTZiNS1jZGY2LTRlOWQtODUzNi0zMGVkNWY0ODg1MGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lYyHlhENqrsoZEvfkvp5dJ5I0srj6Exb6dKUD6HmlnI",
        },
        {
          name: "Hulk Family",
          value: "Hulk Family",
          img: "https://logos-world.net/wp-content/uploads/2022/01/Hulk-Logo.png",
        },
        {
          name: "Hydra",
          value: "Hydra",
          img: "https://upload.wikimedia.org/wikipedia/en/7/7f/Hydra_symbol.png",
        },

        {
          name: "Illuminati",
          value: "Illuminati",
          img: "https://i.ytimg.com/vi/kMzBLe2X-aE/maxresdefault.jpg",
        },
        {
          name: "Inhumans",
          value: "Inhumans",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5fd7346-eed0-4416-8203-58b0d230afe3/dfejcpg-e927c215-be44-4640-8c81-a88090ef5163.png/v1/fill/w_1280,h_578/inhumans_logo_png___disney__variant_by_bats66_dfejcpg-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc4IiwicGF0aCI6IlwvZlwvZTVmZDczNDYtZWVkMC00NDE2LTgyMDMtNThiMGQyMzBhZmUzXC9kZmVqY3BnLWU5MjdjMjE1LWJlNDQtNDY0MC04YzgxLWE4ODA5MGVmNTE2My5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dlImHRVc7dcYDiwRhYU5rff0xaUDBwpfIXMXVtfrgmY",
        },
        {
          name: "Legion of Monsters",
          value: "Legion of Monsters",
          img: "https://i.pinimg.com/564x/6e/a7/f5/6ea7f5127b20f058a2fba019e2008115.jpg",
        },
        {
          name: "Marvel Knights",
          value: "Marvel Knights",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0104ec68-4823-457b-9ac4-ca10b5317304/ddfbsxi-09e76b3c-43a5-42d2-9bdd-0d9d86095f1b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMDRlYzY4LTQ4MjMtNDU3Yi05YWM0LWNhMTBiNTMxNzMwNFwvZGRmYnN4aS0wOWU3NmIzYy00M2E1LTQyZDItOWJkZC0wZDlkODYwOTVmMWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tNvdl7_yq-ZSLqWweeXSFIUFvi6IUpPwVCnPqI5SDu4",
        },
        {
          name: "Midnight Sons",
          value: "Midnight Sons",
          img: "https://image.api.playstation.com/vulcan/ap/rnd/202108/1723/0gPKGnGXftV59bXu6NgH9wXA.png",
        },
        {
          name: "MCU Villains",
          value: "MCU Villains",
          //https://tiermaker.com/images/avatars-2022/Ostrazo/Ostrazo.jpg?1665249362
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07dc11de-dc89-436a-89e0-8ddc2bf29af2/deurkec-115a9ad5-ab77-41eb-bb60-507c8144a89d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3ZGMxMWRlLWRjODktNDM2YS04OWUwLThkZGMyYmYyOWFmMlwvZGV1cmtlYy0xMTVhOWFkNS1hYjc3LTQxZWItYmI2MC01MDdjODE0NGE4OWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tjqC1rZ_YsIckE9pRKb8_htMIf9PRvSnq1-WV4HORLk",
        },
        {
          name: "New Mutants",
          value: "New Mutants",
          img: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082020/the_new_mutants_1st_logo.jpg?mjl.sY8ZuhzkwNEcKRiDwYSYeLCVjDKg&itok=XB7yoDKc",
        },
        {
          name: "New Warriors",
          value: "New Warriors",
          img: "https://i.pinimg.com/originals/ce/19/0a/ce190a4b163fb70300e2b92ead1f9980.png",
        },
        {
          name: "Secret Avengers",
          value: "Secret Avengers",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/df9w9rh-9dd43bc1-9b36-4034-9bb6-8a1c7e4078d0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGY5dzlyaC05ZGQ0M2JjMS05YjM2LTQwMzQtOWJiNi04YTFjN2U0MDc4ZDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xTMfNwvub190r_OcyRUWkVDY-1ODA0yVHDj3ztaamAI",
        },
        {
          name: "S.H.I.E.L.D",
          value: "S.H.I.E.L.D",
          img: "https://seeklogo.com/images/M/marvel-agents-of-shield-icon-logo-54CED6908B-seeklogo.com.png",
        },
        {
          name: "Sinister Six",
          value: "Sinister Six",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a21c2816-49d4-4a5b-b6db-7634a5ea8671/deuucix-26734fb7-e2d7-4f87-8a43-08db5a598984.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyMWMyODE2LTQ5ZDQtNGE1Yi1iNmRiLTc2MzRhNWVhODY3MVwvZGV1dWNpeC0yNjczNGZiNy1lMmQ3LTRmODctOGE0My0wOGRiNWE1OTg5ODQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IZ7FEozXuyy4NOOqmj9ARb9Xh0k3eVDwMGBamAkOwWo",
        },
        {
          name: "Spider-Army",
          value: "Spider-Army",
          img: "https://cdn.mos.cms.futurecdn.net/GNdXbxaRQP4aGLwxc53zZ9.jpg",
        },
        {
          name: "Symbiotes",
          value: "Symbiotes",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/087e4223-8511-4640-b630-2e29d173cf6a/dd8o0k1-3ba7b37c-d8b5-4da0-bf85-8fda58951f9c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4N2U0MjIzLTg1MTEtNDY0MC1iNjMwLTJlMjlkMTczY2Y2YVwvZGQ4bzBrMS0zYmE3YjM3Yy1kOGI1LTRkYTAtYmY4NS04ZmRhNTg5NTFmOWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.H8J5fVOUzAJVgQfHJ-BBHlYvxlgv189xwNv5f7NwiLQ",
        },
        {
          name: "Thunderbolts",
          value: "Thunderbolts",
          img: "https://reelfreak.files.wordpress.com/2014/02/fotoflexer_photo.jpg",
        },
        {
          name: "Ultimates",
          value: "Ultimates",
          img: "https://static.wikia.nocookie.net/marvelcrossroads/images/2/25/Ultimates_%285641%29.png/revision/latest?cb=20161227151528",
        },
        {
          name: "Weapon X",
          value: "Weapon X",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10795fa2-3dbe-470b-93ce-dada2e3e954e/dag852-48ba374e-4007-49ce-bc5a-5f843ccb960c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEwNzk1ZmEyLTNkYmUtNDcwYi05M2NlLWRhZGEyZTNlOTU0ZVwvZGFnODUyLTQ4YmEzNzRlLTQwMDctNDljZS1iYzVhLTVmODQzY2NiOTYwYy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.a-SwCvcA6JX9o8-CntlDCbl2OnNxnTjDi2tcbJyr0AQ",
        },
        {
          name: "X-Force",
          value: "X-Force",
          img: "https://static.wikia.nocookie.net/logocomics/images/b/b4/X-Force%281991-2002%29.png/revision/latest?cb=20210914180116",
        },
        {
          name: "X-Men",
          value: "X-Men",
          // img: 'https://assets.stickpng.com/images/6160517776000b00045a7d7e.png'
          // img: "https://cdn.mos.cms.futurecdn.net/ZmMkFCTgBNMoxEohbzBXJm.jpg",
          img: "https://seeklogo.com/images/X/x-men-logo-F16A0D1D4D-seeklogo.com.png",
        },
        {
          name: "X-Men-Original",
          value: "X-Men-Original",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/X_symbol_from_X-Men_logo.svg/240px-X_symbol_from_X-Men_logo.svg.png",
        },
        {
          name: "Young avengers",
          value: "Young avengers",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f835025f-aa9a-4a6f-bf26-b084438b2053/dfa4dao-424bffc3-fca8-4342-a9f2-cb2eae86efff.jpg/v1/fill/w_1342,h_595,q_70,strp/marvel_studios__young_avengers__logo_png__by_thescarletwitch1989_dfa4dao-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzI3IiwicGF0aCI6IlwvZlwvZjgzNTAyNWYtYWE5YS00YTZmLWJmMjYtYjA4NDQzOGIyMDUzXC9kZmE0ZGFvLTQyNGJmZmMzLWZjYTgtNDM0Mi1hOWYyLWNiMmVhZTg2ZWZmZi5qcGciLCJ3aWR0aCI6Ijw9MTYzOSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JtuXXo7s7xs_xJYyI5xTBDymrR3JxXC9vf90NZcB_HY",
        },
      ];

    case "DC Comics":
      return [
        {
          name: "Aquaman Family",
          value: "Aquaman Family",
          img: "https://1000logos.net/wp-content/uploads/2018/12/Aquaman-logo.png",
        },
        {
          name: "Assorted Batman rogues",
          value: "Assorted Batman rogues",
          img: "https://w0.peakpx.com/wallpaper/555/276/HD-wallpaper-batman-villains-joker-comics-scarecrow-peguin-superheroes-catwoman-two-face-dc-comics-batman-villains-poison-ivy.jpg",
        },
        {
          name: "Batman Family",
          value: "Batman Family",
          img: "https://1.bp.blogspot.com/--SVWM1KMnVg/Xw91Rg-CF5I/AAAAAAAAmYk/31fWiKwl520MlvOY5q3deIke4dibyB8UACLcBGAsYHQ/s1600/228-2288332_gotham-knights-logo-png-transparent-batman-gotham-knights.png",
        },
        {
          name: "Crimebusters / Watchmen",
          value: "Crimebusters",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/300b1a15-9250-4271-b852-3d8701ff1dbd/d1vzmvq-a0f12489-90d0-43e8-a1d9-4a94801fbca1.png/v1/fill/w_1280,h_960,q_80,strp/watchmen_logo_by_marsu85_d1vzmvq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMzAwYjFhMTUtOTI1MC00MjcxLWI4NTItM2Q4NzAxZmYxZGJkXC9kMXZ6bXZxLWEwZjEyNDg5LTkwZDAtNDNlOC1hMWQ5LTRhOTQ4MDFmYmNhMS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.kh8vx0-H6mAi5DCDHPqNN_QosDLpU9wfrLLUy2OcYZ0",
        },
        {
          name: "Crime Syndicate",
          value: "Crime Syndicate",
          img: "https://www.dafont.com/img/illustration/c/r/crime_syndicate.png",
        },
        {
          name: "Flash Family / Speedsters",
          value: "Flash Family",
          img: "https://i.pinimg.com/736x/b4/1c/f7/b41cf7951ae77dcf210eaa20e4b0172b--logos-flash.jpg",
        },
        {
          name: "Green Lantern Corps",
          value: "Green Lantern Corps",
          img: "https://static.miraheze.org/iconswiki/9/94/Green_Lantern_Corps_vol3_Logo.png",
        },
        {
          name: "Injustice League",
          value: "Injustice League",
          img: "https://d36m266ykvepgv.cloudfront.net/uploads/media/wI2fTCuIZN/c-160-160/logo-02-1.jpg",
        },
        {
          name: "Justice League",
          value: "Justice League",
          img: "https://heroichollywood.com/wp-content/uploads/2017/09/justice-league-logo-square-4.jpg",
        },
        {
          name: "Justice League-Original",
          value: "Justice League-Original",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Justice_League_2017_Movie_Logo.svg/1274px-Justice_League_2017_Movie_Logo.svg.png",
        },
        {
          name: "Justice League Dark",
          value: "Justice League Dark",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02b60eed-d9c8-4b8e-b826-3ed0694bcf26/deu14vf-dd6f5d44-ab34-409d-82ab-7959393b86ae.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyYjYwZWVkLWQ5YzgtNGI4ZS1iODI2LTNlZDA2OTRiY2YyNlwvZGV1MTR2Zi1kZDZmNWQ0NC1hYjM0LTQwOWQtODJhYi03OTU5MzkzYjg2YWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wMa5cMF9wHLY8Rey0Tv41tBx1vOy3qxYteTLwfVKrck",
        },
        {
          name: "Justice Society of America",
          value: "Justice Society of America",
          img: "https://i.pinimg.com/736x/a4/cd/ca/a4cdca2411e40a0ecdfe475b2e599871.jpg",
        },
        {
          name: "Lanterns Corps (All)",
          value: "Lantern Corps",
          img: "https://qph.cf2.quoracdn.net/main-qimg-2673d6d36ab6b962fecea97a8dc6f231-lq",
        },
        {
          name: "The Terrifics",
          value: "The Terrifics",
          img: "https://www.pngitem.com/pimgs/m/376-3763618_dc-the-terrifics-15-hd-png-download.png",
        },
        {
          name: "Legion of Super-Heroes",
          value: "Legion of Super-Heroes",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/765582ae-ee02-4dc4-851a-d3dc540cdf79/d417t7r-06f21f67-aab4-415e-9842-20a64c0dc1b6.png/v1/fill/w_256,h_256/legion_of_superheroes_icon_by_jeremymallin_d417t7r-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvNzY1NTgyYWUtZWUwMi00ZGM0LTg1MWEtZDNkYzU0MGNkZjc5XC9kNDE3dDdyLTA2ZjIxZjY3LWFhYjQtNDE1ZS05ODQyLTIwYTY0YzBkYzFiNi5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.mwQtccx3Qrs1UmpTUsd8nN-mNNgfpvytgCZmwO6f808",
        },
        {
          name: "Marvel Family",
          value: "Marvel Family",
          img: "https://i.pinimg.com/originals/b8/94/20/b89420afa43affd9f5cd97900fc89806.png",
        },
        {
          name: "New Guardians Corps",
          value: "New Guardians",
          img: "https://i.pinimg.com/originals/05/58/a9/0558a9596e80cb6931b4bb6d1c876664.png",
        },
        {
          name: "Outsiders",
          value: "Outsiders",
          img: "https://1.bp.blogspot.com/-xg4MjNnNrH0/Tb50RigNa8I/AAAAAAAAA5w/lfQQBWtBVSs/s1600/outsiders.png",
        },
        {
          name: "Secret Society of Super Villains",
          value: "Secret Society of Super Villains",
          img: "https://static.wikia.nocookie.net/comicbookuniverse/images/f/f4/Villians.png/revision/latest?cb=20181017080909",
        },
        {
          name: "Suicide Squad",
          value: "Suicide Squad",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/de3t87x-a54ce749-e4b1-4bc1-adea-12e26110d5d2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0NmE5MDg2LThhNDAtNDNlMC1hYTEwLTJmYzdkNmQ3MzczMFwvZGUzdDg3eC1hNTRjZTc0OS1lNGIxLTRiYzEtYWRlYS0xMmUyNjExMGQ1ZDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jl2NhATv61lvYrInZzGu5VCEV3PYzREWNSIl6_aD0lQ",
        },
        {
          name: "Superman Family / Kriptonian",
          value: "Superman Family",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/1200px-Superman_shield.svg.png",
        },
        {
          name: "Teen Titans",
          value: "Teen Titans",
          img: "https://dccomicsnews.com/wp-content/uploads/2018/02/titans-logo-e1518302381244.png",
        },
      ];

    case "Dark Horse Comics":
      return [
        {
          name: "Incredible Family",
          value: "Incredible Family",
          img: "https://logos-world.net/wp-content/uploads/2021/09/Incredibles-Logo.png",
        },
      ];

    case "IDW Publishing":
      return [
        {
          name: "Teenage Mutant Ninja Turtles",
          value: "Teenage Mutant Ninja Turtles",
          img: "https://logos-world.net/wp-content/uploads/2023/04/Ninja-Turtles-Logo-2003.png",
        },
      ];

    case "Shueisha":
      return [
        {
          name: "One Piece",
          value: "One Piece",
          img: "https://1000logos.net/wp-content/uploads/2022/08/One-Piece-Logo.png",
        },
        {
          name: "Black Clover",
          value: "Black Clover",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76af57fc-7d8b-4116-8c09-75841b6d2da8/dbmt5i0-681aa9ed-9f39-43f6-9d29-cfb23030bf9e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc2YWY1N2ZjLTdkOGItNDExNi04YzA5LTc1ODQxYjZkMmRhOFwvZGJtdDVpMC02ODFhYTllZC05ZjM5LTQzZjYtOWQyOS1jZmIyMzAzMGJmOWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8r1Wcr1xhY_GfHs_ljKeHjTmWd8AhzMSOpJFOeIhotk",
        },
        {
          name: "Dragon Ball",
          value: "Dragon Ball",
          img: "https://logos-world.net/wp-content/uploads/2021/02/Dragon-Ball-Logo.png",
        },
        {
          name: "Demon Slayer",
          value: "Demon Slayer",
          img: "https://logos-world.net/wp-content/uploads/2021/12/Demon-Slayer-Logo.png",
        },
        {
          name: "Jujutsu Kaisen",
          value: "Jujutsu Kaisen",
          img: "https://i.pinimg.com/originals/66/fd/03/66fd03b4ab97f1d45e2bfc5e00f94a2f.png",
        },
        {
          name: "Bleach",
          value: "Bleach",
          img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bleach_logo_anime.jpg",
        },
        {
          name: "Attack on Titan",
          value: "Attack on Titan",
          img: "https://logos-world.net/wp-content/uploads/2022/01/Attack-on-Titan-Logo.png",
        },
        {
          name: "Naruto Shippuden",
          value: "Naruto Shippuden",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/667787d5-f7b0-4eb6-97ee-76f03852fa83/d1sz44l-d35ebbe3-df1f-4043-9be6-5ed49301c01f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2Nzc4N2Q1LWY3YjAtNGViNi05N2VlLTc2ZjAzODUyZmE4M1wvZDFzejQ0bC1kMzVlYmJlMy1kZjFmLTQwNDMtOWJlNi01ZWQ0OTMwMWMwMWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NhJ0Wzg5CuzTnrO-Khw1NrpOdO9JTFJzswd4AWNQSWw",
        },
        {
          name: "One Punch Man",
          value: "One Punch Man",
          img: "https://i.pinimg.com/564x/6d/b2/02/6db2024de8be20d87662727e6556cb07.jpg",
        },
        {
          name: "Chainsaw Man",
          value: "Chainsaw Man",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chainsaw_Man_logo.png/1200px-Chainsaw_Man_logo.png",
        },
        {
          name: "Metal Alchemist",
          value: "Metal Alchemist",
          img: "https://m.media-amazon.com/images/I/71p7ercPcHL.jpg",
        },
      ];

    case "Warner Bros":
      return [
        {
          name: "Ben 10",
          value: "Ben 10",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b700c630-9435-4853-b567-d025115b827b/degakzn-576504c0-f8f6-40f0-b130-3a19544a0e9e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3MDBjNjMwLTk0MzUtNDg1My1iNTY3LWQwMjUxMTViODI3YlwvZGVnYWt6bi01NzY1MDRjMC1mOGY2LTQwZjAtYjEzMC0zYTE5NTQ0YTBlOWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yPaYT4GYrakHIDBEXastMExHC4xVn4_kUFmgvd5J7sA",
        },
        {
          name: "Supernatural",
          value: "Supernatural",
          img: "https://supernaturalmerch.store/wp-content/uploads/2020/10/Supernatural-Store-logo-1-1.png",
        },
      ];

    case 'Super Sentai':
      return [
        {
          name: 'Power Rangers',
          value: 'Power Rangers',
          img: 'https://static.wikia.nocookie.net/logopedia/images/7/71/MMPR_Era_Logo.png/revision/latest?cb=20140212040130'
        }
      ]

    case 'SEGA':
      return [
        {
          name: 'Sonic Universe',
          value: 'Sonic Universe',
          img: 'https://static.wikia.nocookie.net/sonic/images/9/95/Sonic_Universe_Logo.png/revision/latest?cb=20140717161343'
        },
        {
          name: 'Mario Universe',
          value: 'Mario Universe',
          img: 'https://ssb.wiki.gallery/images/9/96/MarioTitle.svg'
        }
      ]
    default:
      return [];
  }
}

export function getTeamBackgroundImageByUniverse(universe: string): { name: string, value: string, img: string }[] | undefined {
  switch (universe) {
    case "Marvel Comics":
      return [
        {
          name: "Asgardians",
          value: "Asgardians",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a21c2816-49d4-4a5b-b6db-7634a5ea8671/deqsmlv-740da833-0582-4672-9c63-a58f1f79565c.png/v1/fill/w_638,h_604/asgard_logo_by_spiderbyte64_deqsmlv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjA0IiwicGF0aCI6IlwvZlwvYTIxYzI4MTYtNDlkNC00YTViLWI2ZGItNzYzNGE1ZWE4NjcxXC9kZXFzbWx2LTc0MGRhODMzLTA1ODItNDY3Mi05YzYzLWE1OGYxZjc5NTY1Yy5wbmciLCJ3aWR0aCI6Ijw9NjM4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.R5bMAGrtXXim7EM_A84hkucgZewYCUOzB8_Uevmkwlc",
        },
        {
          name: "Avengers",
          value: "Avengers",
          img: "https://images2.alphacoders.com/789/789095.jpg",
        },
        {
          name: "Avengers-Original",
          value: "Avengers-Original",
          img: "https://cdn.mos.cms.futurecdn.net/DBi5Vv6sJr3HNzyWrUCgK6.jpg",
        },
        {
          name: "Black Order",
          value: "Black Order",
          img: "https://cdn.marvel.com/u/prod/marvel/i/mg/b/d0/5a5fb47ff00b0/clean.jpg",
        },
        {
          name: "Brotherhood of Evil Mutants",
          value: "Brotherhood of Evil Mutants",
          img: "https://i.pinimg.com/564x/1a/65/39/1a6539168939ad87492441851f5f6160.jpg",
        },
        {
          name: "Dark avengers",
          value: "Dark avengers",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02b60eed-d9c8-4b8e-b826-3ed0694bcf26/deezys0-ad61e4e7-f0b7-458c-a304-ce6a82883302.png/v1/fill/w_1181,h_591/dark_avengers_logo_by_lyriumrogue_deezys0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkxIiwicGF0aCI6IlwvZlwvMDJiNjBlZWQtZDljOC00YjhlLWI4MjYtM2VkMDY5NGJjZjI2XC9kZWV6eXMwLWFkNjFlNGU3LWYwYjctNDU4Yy1hMzA0LWNlNmE4Mjg4MzMwMi5wbmciLCJ3aWR0aCI6Ijw9MTE4MSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WGNpBaikwouoeHzsLf0ywqFGVrJKaErqEjuquOdU-14",
        },
        {
          name: "Defenders",
          value: "Defenders",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c566b360-dcc0-4f8d-8154-05e8123d0d36/d6nq2rp-d52122fd-909a-4eaa-963e-3268cc5595a8.png/v1/fill/w_1024,h_442,q_80,strp/marvel_s_the_defenders___logo_by_mrsteiners_d6nq2rp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDQyIiwicGF0aCI6IlwvZlwvYzU2NmIzNjAtZGNjMC00ZjhkLTgxNTQtMDVlODEyM2QwZDM2XC9kNm5xMnJwLWQ1MjEyMmZkLTkwOWEtNGVhYS05NjNlLTMyNjhjYzU1OTVhOC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MFsU6vsmf_xeeiPuf_qwGy6HrYqunWGwqxJEs6JJql8",
        },
        {
          name: "Fantastic Four",
          value: "Fantastic Four",
          img: "https://image-pastemagazine-com-public-bucket.storage.googleapis.com/wp-content/uploads/2022/06/20083956/imageedit_21_3331830624.jpg",
        },
        {
          name: "Fantastic Four-Original",
          value: "Fantastic Four-Original",
          img: "https://variety.com/wp-content/uploads/2019/07/d_9rmyfwkaeutsc.jpg-large.jpeg",
        },
        {
          name: "Future Foundation",
          value: "Future Foundation",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a499871d-b693-45f6-ae90-f9451fff00da/d8qujky-26fe2e98-50ca-4bf2-8bbd-eb2ff034ae7e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E0OTk4NzFkLWI2OTMtNDVmNi1hZTkwLWY5NDUxZmZmMDBkYVwvZDhxdWpreS0yNmZlMmU5OC01MGNhLTRiZjItOGJiZC1lYjJmZjAzNGFlN2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Fe-uzIK474LCq2QnBzXM7ge6m-TfBFonIv5WIJ-3_rc",
        },
        {
          name: "Guardians of the Galaxy",
          value: "Guardians of the Galaxy",
          img: "https://aiptcomics.com/wp-content/uploads/2023/01/GARGALBOB2023001_CVR-1.jpg",
        },
        {
          name: "Heroes For Hire",
          value: "Heroes For Hire",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b6361af-d2ac-439d-a6fe-b3d69bba2a56/ddvf1p0-bfe256b5-cdf6-4e9d-8536-30ed5f48850b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNiNjM2MWFmLWQyYWMtNDM5ZC1hNmZlLWIzZDY5YmJhMmE1NlwvZGR2ZjFwMC1iZmUyNTZiNS1jZGY2LTRlOWQtODUzNi0zMGVkNWY0ODg1MGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lYyHlhENqrsoZEvfkvp5dJ5I0srj6Exb6dKUD6HmlnI",
        },
        {
          name: "Hulk Family",
          value: "Hulk Family",
          img: "https://logos-world.net/wp-content/uploads/2022/01/Hulk-Logo.png",
        },
        {
          name: "Hydra",
          value: "Hydra",
          img: "https://upload.wikimedia.org/wikipedia/en/7/7f/Hydra_symbol.png",
        },

        {
          name: "Illuminati",
          value: "Illuminati",
          img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/02/illuminati-Cropped.png",
        },
        {
          name: "Inhumans",
          value: "Inhumans",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5fd7346-eed0-4416-8203-58b0d230afe3/dfejcpg-e927c215-be44-4640-8c81-a88090ef5163.png/v1/fill/w_1280,h_578/inhumans_logo_png___disney__variant_by_bats66_dfejcpg-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc4IiwicGF0aCI6IlwvZlwvZTVmZDczNDYtZWVkMC00NDE2LTgyMDMtNThiMGQyMzBhZmUzXC9kZmVqY3BnLWU5MjdjMjE1LWJlNDQtNDY0MC04YzgxLWE4ODA5MGVmNTE2My5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dlImHRVc7dcYDiwRhYU5rff0xaUDBwpfIXMXVtfrgmY",
        },
        {
          name: "Legion of Monsters",
          value: "Legion of Monsters",
          img: "https://i.pinimg.com/564x/6e/a7/f5/6ea7f5127b20f058a2fba019e2008115.jpg",
        },
        {
          name: "Marvel Knights",
          value: "Marvel Knights",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0104ec68-4823-457b-9ac4-ca10b5317304/ddfbsxi-09e76b3c-43a5-42d2-9bdd-0d9d86095f1b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMDRlYzY4LTQ4MjMtNDU3Yi05YWM0LWNhMTBiNTMxNzMwNFwvZGRmYnN4aS0wOWU3NmIzYy00M2E1LTQyZDItOWJkZC0wZDlkODYwOTVmMWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tNvdl7_yq-ZSLqWweeXSFIUFvi6IUpPwVCnPqI5SDu4",
        },
        {
          name: "Midnight Sons",
          value: "Midnight Sons",
          img: "https://image.api.playstation.com/vulcan/ap/rnd/202108/1723/0gPKGnGXftV59bXu6NgH9wXA.png",
        },
        {
          name: "MCU Villains",
          value: "MCU Villains",
          //https://tiermaker.com/images/avatars-2022/Ostrazo/Ostrazo.jpg?1665249362
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07dc11de-dc89-436a-89e0-8ddc2bf29af2/deurkec-115a9ad5-ab77-41eb-bb60-507c8144a89d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3ZGMxMWRlLWRjODktNDM2YS04OWUwLThkZGMyYmYyOWFmMlwvZGV1cmtlYy0xMTVhOWFkNS1hYjc3LTQxZWItYmI2MC01MDdjODE0NGE4OWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tjqC1rZ_YsIckE9pRKb8_htMIf9PRvSnq1-WV4HORLk",
        },
        {
          name: "New Mutants",
          value: "New Mutants",
          img: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082020/the_new_mutants_1st_logo.jpg?mjl.sY8ZuhzkwNEcKRiDwYSYeLCVjDKg&itok=XB7yoDKc",
        },
        {
          name: "New Warriors",
          value: "New Warriors",
          img: "https://i.pinimg.com/originals/ce/19/0a/ce190a4b163fb70300e2b92ead1f9980.png",
        },
        {
          name: "Secret Avengers",
          value: "Secret Avengers",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/df9w9rh-9dd43bc1-9b36-4034-9bb6-8a1c7e4078d0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGY5dzlyaC05ZGQ0M2JjMS05YjM2LTQwMzQtOWJiNi04YTFjN2U0MDc4ZDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xTMfNwvub190r_OcyRUWkVDY-1ODA0yVHDj3ztaamAI",
        },
        {
          name: "S.H.I.E.L.D",
          value: "S.H.I.E.L.D",
          img: "https://seeklogo.com/images/M/marvel-agents-of-shield-icon-logo-54CED6908B-seeklogo.com.png",
        },
        {
          name: "Sinister Six",
          value: "Sinister Six",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a21c2816-49d4-4a5b-b6db-7634a5ea8671/deuucix-26734fb7-e2d7-4f87-8a43-08db5a598984.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyMWMyODE2LTQ5ZDQtNGE1Yi1iNmRiLTc2MzRhNWVhODY3MVwvZGV1dWNpeC0yNjczNGZiNy1lMmQ3LTRmODctOGE0My0wOGRiNWE1OTg5ODQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IZ7FEozXuyy4NOOqmj9ARb9Xh0k3eVDwMGBamAkOwWo",
        },
        {
          name: "Spider-Army",
          value: "Spider-Army",
          img: "https://cdn.mos.cms.futurecdn.net/GNdXbxaRQP4aGLwxc53zZ9.jpg",
        },
        {
          name: "Symbiotes",
          value: "Symbiotes",
          img: "https://static.wikia.nocookie.net/marveldatabase/images/9/98/Symbiotes_from_Mighty_Avengers_Vol_1_7_001.jpg/revision/latest?cb=20230620223629",
        },
        {
          name: "Thunderbolts",
          value: "Thunderbolts",
          img: "https://reelfreak.files.wordpress.com/2014/02/fotoflexer_photo.jpg",
        },
        {
          name: "Ultimates",
          value: "Ultimates",
          img: "https://i0.wp.com/guiasdelectura.com/wp-content/uploads/2018/04/Ultimates_Vol_1_1.jpg?fit=1000%2C251&ssl=1",
        },
        {
          name: "Weapon X",
          value: "Weapon X",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10795fa2-3dbe-470b-93ce-dada2e3e954e/dag852-48ba374e-4007-49ce-bc5a-5f843ccb960c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEwNzk1ZmEyLTNkYmUtNDcwYi05M2NlLWRhZGEyZTNlOTU0ZVwvZGFnODUyLTQ4YmEzNzRlLTQwMDctNDljZS1iYzVhLTVmODQzY2NiOTYwYy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.a-SwCvcA6JX9o8-CntlDCbl2OnNxnTjDi2tcbJyr0AQ",
        },
        {
          name: "X-Force",
          value: "X-Force",
          img: "https://static.wikia.nocookie.net/logocomics/images/b/b4/X-Force%281991-2002%29.png/revision/latest?cb=20210914180116",
        },
        {
          name: "X-Men",
          value: "X-Men",
          // img: 'https://assets.stickpng.com/images/6160517776000b00045a7d7e.png'
          // img: "https://cdn.mos.cms.futurecdn.net/ZmMkFCTgBNMoxEohbzBXJm.jpg",
          img: "https://images5.alphacoders.com/525/525196.jpg",
        },
        {
          name: "X-Men-Original",
          value: "X-Men-Original",
          img: "https://www.hollywoodreporter.com/wp-content/uploads/2015/04/all_new_x_men_cover.jpg?w=3000",
        },
        {
          name: "Young avengers",
          value: "Young avengers",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f835025f-aa9a-4a6f-bf26-b084438b2053/dfa4dao-424bffc3-fca8-4342-a9f2-cb2eae86efff.jpg/v1/fill/w_1342,h_595,q_70,strp/marvel_studios__young_avengers__logo_png__by_thescarletwitch1989_dfa4dao-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzI3IiwicGF0aCI6IlwvZlwvZjgzNTAyNWYtYWE5YS00YTZmLWJmMjYtYjA4NDQzOGIyMDUzXC9kZmE0ZGFvLTQyNGJmZmMzLWZjYTgtNDM0Mi1hOWYyLWNiMmVhZTg2ZWZmZi5qcGciLCJ3aWR0aCI6Ijw9MTYzOSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JtuXXo7s7xs_xJYyI5xTBDymrR3JxXC9vf90NZcB_HY",
        },
      ];

    case "DC Comics":
      return [
        {
          name: "Aquaman Family",
          value: "Aquaman Family",
          img: "https://1000logos.net/wp-content/uploads/2018/12/Aquaman-logo.png",
        },
        {
          name: "Assorted Batman rogues",
          value: "Assorted Batman rogues",
          img: "https://w0.peakpx.com/wallpaper/555/276/HD-wallpaper-batman-villains-joker-comics-scarecrow-peguin-superheroes-catwoman-two-face-dc-comics-batman-villains-poison-ivy.jpg",
        },
        {
          name: "Batman Family",
          value: "Batman Family",
          img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/01/batman-bat-family-cover.jpg",
        },
        {
          name: "Crimebusters / Watchmen",
          value: "Crimebusters",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/300b1a15-9250-4271-b852-3d8701ff1dbd/d1vzmvq-a0f12489-90d0-43e8-a1d9-4a94801fbca1.png/v1/fill/w_1280,h_960,q_80,strp/watchmen_logo_by_marsu85_d1vzmvq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMzAwYjFhMTUtOTI1MC00MjcxLWI4NTItM2Q4NzAxZmYxZGJkXC9kMXZ6bXZxLWEwZjEyNDg5LTkwZDAtNDNlOC1hMWQ5LTRhOTQ4MDFmYmNhMS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.kh8vx0-H6mAi5DCDHPqNN_QosDLpU9wfrLLUy2OcYZ0",
        },
        {
          name: "Crime Syndicate",
          value: "Crime Syndicate",
          img: "https://www.dafont.com/img/illustration/c/r/crime_syndicate.png",
        },
        {
          name: "Flash Family / Speedsters",
          value: "Flash Family",
          img: "https://m.media-amazon.com/images/M/MV5BMTY0YzFlYzItMzRlZi00YzA0LTk5OTEtY2M5NDZjY2NhMjk2XkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_.jpg",
        },
        {
          name: "Green Lantern Corps",
          value: "Green Lantern Corps",
          img: "https://static.miraheze.org/iconswiki/9/94/Green_Lantern_Corps_vol3_Logo.png",
        },
        {
          name: "Injustice League",
          value: "Injustice League",
          img: "https://d36m266ykvepgv.cloudfront.net/uploads/media/wI2fTCuIZN/c-160-160/logo-02-1.jpg",
        },
        {
          name: "Justice League",
          value: "Justice League",
          img: "https://cdn.mos.cms.futurecdn.net/bGLTf9F6sShdvP6FeyTKtP.jpg",
        },
        {
          name: "Justice League-Original",
          value: "Justice League-Original",
          img: "https://i0.wp.com/setthetape.com/wp-content/uploads/2017/10/gallerychar_1900x900_justiceleague_52ab8e54d0a6f0-42170553.jpg?fit=1900%2C900&ssl=1",
        },
        {
          name: "Justice League Dark",
          value: "Justice League Dark",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02b60eed-d9c8-4b8e-b826-3ed0694bcf26/deu14vf-dd6f5d44-ab34-409d-82ab-7959393b86ae.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyYjYwZWVkLWQ5YzgtNGI4ZS1iODI2LTNlZDA2OTRiY2YyNlwvZGV1MTR2Zi1kZDZmNWQ0NC1hYjM0LTQwOWQtODJhYi03OTU5MzkzYjg2YWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wMa5cMF9wHLY8Rey0Tv41tBx1vOy3qxYteTLwfVKrck",
        },
        {
          name: "Justice Society of America",
          value: "Justice Society of America",
          img: "https://i.pinimg.com/736x/a4/cd/ca/a4cdca2411e40a0ecdfe475b2e599871.jpg",
        },
        {
          name: "Lanterns Corps (All)",
          value: "Lantern Corps",
          img: "https://qph.cf2.quoracdn.net/main-qimg-2673d6d36ab6b962fecea97a8dc6f231-lq",
        },
        {
          name: "The Terrifics",
          value: "The Terrifics",
          img: "https://www.pngitem.com/pimgs/m/376-3763618_dc-the-terrifics-15-hd-png-download.png",
        },
        {
          name: "Legion of Super-Heroes",
          value: "Legion of Super-Heroes",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/765582ae-ee02-4dc4-851a-d3dc540cdf79/d417t7r-06f21f67-aab4-415e-9842-20a64c0dc1b6.png/v1/fill/w_256,h_256/legion_of_superheroes_icon_by_jeremymallin_d417t7r-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvNzY1NTgyYWUtZWUwMi00ZGM0LTg1MWEtZDNkYzU0MGNkZjc5XC9kNDE3dDdyLTA2ZjIxZjY3LWFhYjQtNDE1ZS05ODQyLTIwYTY0YzBkYzFiNi5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.mwQtccx3Qrs1UmpTUsd8nN-mNNgfpvytgCZmwO6f808",
        },
        {
          name: "Marvel Family",
          value: "Marvel Family",
          img: "https://i.pinimg.com/originals/b8/94/20/b89420afa43affd9f5cd97900fc89806.png",
        },
        {
          name: "New Guardians Corps",
          value: "New Guardians",
          img: "https://i.pinimg.com/originals/05/58/a9/0558a9596e80cb6931b4bb6d1c876664.png",
        },
        {
          name: "Outsiders",
          value: "Outsiders",
          img: "https://1.bp.blogspot.com/-xg4MjNnNrH0/Tb50RigNa8I/AAAAAAAAA5w/lfQQBWtBVSs/s1600/outsiders.png",
        },
        {
          name: "Secret Society of Super Villains",
          value: "Secret Society of Super Villains",
          img: "https://static.wikia.nocookie.net/comicbookuniverse/images/f/f4/Villians.png/revision/latest?cb=20181017080909",
        },
        {
          name: "Suicide Squad",
          value: "Suicide Squad",
          img: "https://pyxis.nymag.com/v1/imgs/c45/375/3776bf58625222e2a2492cf5847d2cdd96-suicide-squad-1.2x.rsocial.w600.jpg",
        },
        {
          name: "Superman Family / Kriptonian",
          value: "Superman Family",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/1200px-Superman_shield.svg.png",
        },
        {
          name: "Teen Titans",
          value: "Teen Titans",
          img: "https://assetsio.reedpopcdn.com/Titans-United-Bloodpact-1-(main-cover)-listing.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
        },
      ];

    case "Dark Horse Comics":
      return [
        {
          name: "Incredible Family",
          value: "Incredible Family",
          img: "https://logos-world.net/wp-content/uploads/2021/09/Incredibles-Logo.png",
        },
      ];

    case "IDW Publishing":
      return [
        {
          name: "Teenage Mutant Ninja Turtles",
          value: "Teenage Mutant Ninja Turtles",
          img: "https://logos-world.net/wp-content/uploads/2023/04/Ninja-Turtles-Logo-2003.png",
        },
      ];

    case "Shueisha":
      return [
        {
          name: "One Piece",
          value: "One Piece",
          img: "https://1000logos.net/wp-content/uploads/2022/08/One-Piece-Logo.png",
        },
        {
          name: "Black Clover",
          value: "Black Clover",
          img: "https://www.animeesports.com/attachment.php?aid=2313",
        },
        {
          name: "Dragon Ball",
          value: "Dragon Ball",
          img: "https://dotesports.com/wp-content/uploads/2022/07/11085819/dragon-ball-super-characters.jpg?w=1200",
        },
        {
          name: "Demon Slayer",
          value: "Demon Slayer",
          img: "https://cdn.oneesports.gg/cdn-data/2023/01/Anime_DemonSlayer_AllHashira_2.jpg",
        },
        {
          name: "Jujutsu Kaisen",
          value: "Jujutsu Kaisen",
          img: "https://images3.alphacoders.com/127/1275244.jpg",
        },
        {
          name: "Bleach",
          value: "Bleach",
          img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bleach_logo_anime.jpg",
        },
        {
          name: "Attack on Titan",
          value: "Attack on Titan",
          img: "https://logos-world.net/wp-content/uploads/2022/01/Attack-on-Titan-Logo.png",
        },
        {
          name: "Naruto Shippuden",
          value: "Naruto Shippuden",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/667787d5-f7b0-4eb6-97ee-76f03852fa83/d1sz44l-d35ebbe3-df1f-4043-9be6-5ed49301c01f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2Nzc4N2Q1LWY3YjAtNGViNi05N2VlLTc2ZjAzODUyZmE4M1wvZDFzejQ0bC1kMzVlYmJlMy1kZjFmLTQwNDMtOWJlNi01ZWQ0OTMwMWMwMWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NhJ0Wzg5CuzTnrO-Khw1NrpOdO9JTFJzswd4AWNQSWw",
        },
        {
          name: "One Punch Man",
          value: "One Punch Man",
          img: "https://i.pinimg.com/564x/6d/b2/02/6db2024de8be20d87662727e6556cb07.jpg",
        },
        {
          name: "Chainsaw Man",
          value: "Chainsaw Man",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chainsaw_Man_logo.png/1200px-Chainsaw_Man_logo.png",
        },
        {
          name: "Metal Alchemist",
          value: "Metal Alchemist",
          img: "https://m.media-amazon.com/images/I/71p7ercPcHL.jpg",
        },
      ];

    case "Warner Bros":
      return [
        {
          name: "Ben 10",
          value: "Ben 10",
          img: "https://64.media.tumblr.com/8893762252479eb07507d089941bf771/ef28a1f0aa31566d-a6/s1280x1920/0e1ae51a16ae84a9932019e3a9ccbdac43f7b958.png",
        },
        {
          name: "Supernatural",
          value: "Supernatural",
          img: "https://images.alphacoders.com/563/563085.jpg",
        },
      ];

    case 'Super Sentai':
      return [
        {
          name: 'Power Rangers',
          value: 'Power Rangers',
          img: 'https://static01.nyt.com/images/2012/06/22/arts/22GENZLINGER_SPAN/22GENZLINGER_SPAN-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
        }
      ]

    case 'SEGA':
      return [
        {
          name: 'Sonic Universe',
          value: 'Sonic Universe',
          img: 'https://static.wikia.nocookie.net/heroism/images/b/bd/Green_Hill_Zone.png/revision/latest?cb=20230622040038'
        },
        {
          name: 'Mario Universe',
          value: 'Mario Universe',
          img: 'https://static.vecteezy.com/system/resources/previews/021/100/565/non_2x/fantasy-world-game-background-free-vector.jpg'
        }
      ]
    default:
      return undefined;
  }
}

// const arrayOptions = ["name", "id", "_id", "powerstats.power", "powerstats.intelligence", "powerstats.strength", "powerstats.durability", "powerstats.combat", "powerstats.speed"]
// export const linkToCharactersPage = `/characters?pageCharacters=${Math.floor(Math.random() * 179) + 1}&characterOrFullName=false&side=All&universe=All&sortBy=${arrayOptions[Math.floor(Math.random() * arrayOptions.length)]}&sortDirection=desc&team=All`
// export const linkToCharactersPage = `/characters?pageCharacters=${Math.floor(Math.random() * 179) + 1}&characterOrFullName=false&side=All&universe=All&sortBy=_id&sortDirection=desc&team=All`
// export const linkToCharactersPage = `/characters?pageCharacters=1&characterOrFullName=false&side=All&universe=All&sortBy=_id&sortDirection=desc&team=All`
export const linkToCharactersPage = `/characters`