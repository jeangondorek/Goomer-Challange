export function validatePromoFields(promo: any, description:any, precopromo: any, diasempromo: any, horarioIniciopromo: any, horarioFimpromo:any) {
  if (promo && (!precopromo || !diasempromo || !horarioIniciopromo || !horarioFimpromo || !description)) {
    return true;
  }
  if (!promo && (precopromo || diasempromo || horarioIniciopromo || horarioFimpromo || description)) {
    return true;
  }
}