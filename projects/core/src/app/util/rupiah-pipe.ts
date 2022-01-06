import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'rupiah' })
export class RupiahPipe implements PipeTransform {

    constructor(private currencyPipe: CurrencyPipe) { }

    transform(value: string | number): string | undefined {
        const money: string | null = this.currencyPipe.transform(value, 'IDR')
        var rp : string | undefined = money?.replace('IDR', `Rp`)
        rp = rp?.replace('.', 'x')
        rp = rp?.split(',').join('.')
        rp = rp?.replace('x', ',')
        return rp
    }
}