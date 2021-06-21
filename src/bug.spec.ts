import ora, { Ora } from "ora";

it("jest bug",()=>{
    const oraInstance:Ora = ora();
    expect(oraInstance.isSpinning).toEqual(false)
    oraInstance.start("test")
    expect(oraInstance.isSpinning).toEqual(true)
    oraInstance.stopAndPersist()
})