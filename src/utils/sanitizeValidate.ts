export class sanitizeValidate{
     sanitizeStringToUppercase(value: String) {
        return value
          .replace(/[^a-zA-Z0-9À-ÖØ-öø-ÿ\s]/g, ' ')
          .toUpperCase()
          .trim()
      }

      sanitizeDocumentCepAndPhones(value: String) {
        return value.replace(/[^0-9]/gi, '')
      }

      sanitizeAddresNumber(value: String) {
        return value.replace(/[^a-zA-Z0-9\s]/g, ' ').trim()
      }
      
      sanitizeAddres(value: String) {
        return value.replace(/[^a-zA-Z0-9À-ÖØ-öø-ÿ\s]/g, ' ').trim()
      }
      
}