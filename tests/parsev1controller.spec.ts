import 'jest';
import { parsev1controller } from './../controllers/parserv1controller';

test('test for parser', () => {
    const parserv1 = new parsev1controller();
    const result = parserv1.processRequest({ data: "JOHN0000DOE000999676" });
    expect(result).not.toBe(null);
    expect(result.clientId).toBe("999676");
    expect(result.lastName).toBe("DOE000");
    expect(result.firstName).toBe("JOHN0000");
})