import transformer from "../transformer";

describe("transformer", () => {
  it("should trim the string", () => {
    // arrange
    const input = " helloworld ";

    // act
    const result = transformer(input);

    // assert
    expect(result).toBe("helloworld");
  });

  it("should lower case the string", () => {
    // arrange
    const input = "HELLO World";

    // act
    const result = transformer(input);

    // assert
    expect(result).toBe("hello-world");
  });

  it("should replace whitespaces with dash", () => {
    // arrange
    const input = "hello   world";

    // act
    const result = transformer(input);

    // assert
    expect(result).toBe("hello-world");
  });

  it("should replace non latin-1 characters with latin-1 characters", () => {
    // arrange
    const input = "Hällö Wårld";

    // act
    const result = transformer(input);

    // assert
    expect(result).toBe("hallo-warld");
  });

  describe("alphanumerics", () => {
    it("should replace characters not letters or numbers", () => {
      // arrange
      const input = " h.e{l}l[o_w!o:r;L&d1";

      // act
      const result = transformer(input, "alphanumerics");

      // assert
      expect(result).toBe("helloworld1");
    });
  });

  describe("alphanumericsHyphens", () => {
    it("should replace characters not alphanumerics, letters or hyphens", () => {
      // arrange
      const input = "hello world 23";

      // act
      const result = transformer(input, "alphanumericsHyphens");

      // assert
      expect(result).toBe("hello-world-23");
    });
  });

  describe("alphanumericsUnderscores", () => {
    it("should replace characters not alphanumerics letters or underscores", () => {
      // arrange
      const input = "Hello World_45";

      // act
      const result = transformer(input, "alphanumericsUnderscores");

      // assert
      expect(result).toBe("helloworld_45");
    });
  });

  describe("alphanumericsUnderscoresHyphens", () => {
    it("should replace characters not alphanumerics, letters, underscores or hyphens", () => {
      // arrange
      const input = "Hello World_45";

      // act
      const result = transformer(input, "alphanumericsUnderscoresHyphens");

      // assert
      expect(result).toBe("hello-world_45");
    });
  });

  describe("alphanumericsUnderscoresPeriodsHyphens", () => {
    it("should replace characters not alphanumerics, letters, underscores, periods or hyphens", () => {
      // arrange
      const input = "Hallå du, siffror 123 går bra Även _ och -.";

      // act
      const result = transformer(
        input,
        "alphanumericsUnderscoresPeriodsHyphens",
      );

      // assert
      expect(result).toBe("halla-du-siffror-123-gar-bra-aven-_-och-.");
    });
  });

  describe("labelsAlphanumericsUnderscoresHyphens", () => {
    it("should format as a domain name", () => {
      // arrange
      const input = "Klabbet Blog Web";

      // act
      const result = transformer(
        input,
        "labelsAlphanumericsUnderscoresHyphens",
      );

      // assert
      expect(result).toBe("klabbet.blog.web");
    });
  });
});
