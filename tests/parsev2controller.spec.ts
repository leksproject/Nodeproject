import 'jest';
import { parsev2controller } from './../controllers/parserv2controller';

test('test for parser', () => {
    const parserv1 = new parsev2controller();
    const result = parserv1.processRequest({ data: "JOHN0000DOE000999676" });
    expect(result).not.toBe(null);
    expect(result.clientId).toBe("999-676");
    expect(result.lastName).toBe("DOE");
    expect(result.firstName).toBe("JOHN");
})