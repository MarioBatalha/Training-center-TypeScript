namespace validation {
  let emailRegex : RegExp;
  let urlRegex: RegExp;
  class emailValidator{
      isValid(str: string): boolean{
          return emailRegex.test(str);
      }
  }
  class urlValidator{
      isvalid(str: string): boolean{
          return urlRegex.test(str);
      }
  }
}