'use client';

import React, { useState, useEffect } from 'react';
import { useBill } from '@/providers/bill-provider';
import { Button } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import { ButtonGroup, ButtonGroupItem } from '@/components/base/button-group/button-group';
import { SectionHeader } from '@/components/application/section-headers/section-headers';
import { Person } from '@/types/bill';
import { Plus, Trash01, Users01, List, UsersPlus } from '@untitledui/icons';
import { FeaturedIcon } from '@/components/foundations/featured-icon/featured-icon';

import { getAlphabetName } from '@/utils/person-name';

export const PeopleInput = () => {
    const { setPeople } = useBill();
    const [mode, setMode] = useState<'count' | 'list'>('count');
    const [count, setCount] = useState<number>(2);
    const [names, setNames] = useState<string[]>(['', '']);

    useEffect(() => {
        if (mode === 'count') {
            const generatedPeople: Person[] = Array.from({ length: count }, (_, i) => ({
                id: `person-${i}`,
                name: getAlphabetName(i),
            }));
            setPeople(generatedPeople);
        } else {
            const listPeople: Person[] = names
                .map((name, i) => ({
                    id: `person-${i}`,
                    name: name.trim() || getAlphabetName(i),
                }));
            setPeople(listPeople);
        }
    }, [mode, count, names, setPeople]);

    const handleAddName = () => setNames([...names, '']);
    const handleRemoveName = (index: number) => {
        const newNames = [...names];
        newNames.splice(index, 1);
        setNames(newNames);
    };
    const handleNameChange = (index: number, value: string) => {
        const newNames = [...names];
        newNames[index] = value;
        setNames(newNames);
    };

    return (
        <div className="bg-primary p-6 md:p-8 rounded-3xl border border-secondary shadow-sm transition-all hover:shadow-md">
            <div className="flex items-start gap-4 mb-6">
                <FeaturedIcon color="brand" theme="modern" size="md" icon={UsersPlus} />
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary">Who's involved?</h3>
                    <p className="text-sm text-tertiary">Select how you want to add people to this bill.</p>
                </div>
            </div>

            <div className="space-y-6">
                <ButtonGroup
                    size="sm"
                    selectedKeys={[mode]}
                    onSelectionChange={(keys) => {
                        const key = Array.from(keys)[0] as 'count' | 'list';
                        if (key) setMode(key);
                    }}
                    className="bg-bg-secondary p-1 rounded-xl"
                >
                    <ButtonGroupItem id="count" iconLeading={Users01}>Quick Amount</ButtonGroupItem>
                    <ButtonGroupItem id="list" iconLeading={List}>Add by Name</ButtonGroupItem>
                </ButtonGroup>

                {mode === 'count' ? (
                    <div className="flex items-center gap-6 p-5 bg-bg-secondary rounded-2xl border border-secondary border-dashed">
                        <div className="w-24">
                            <Input
                                type="number"
                                value={count.toString()}
                                onChange={(val) => setCount(Math.max(1, parseInt(val) || 1))}
                                placeholder="2"
                                className="text-center"
                            />
                        </div>
                        <p className="text-sm text-tertiary font-medium">
                            Bill will be split among <span className="text-brand-secondary">{count} people</span>.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="grid gap-3">
                            {names.map((name, index) => (
                                <div key={index} className="flex items-end gap-3 group">
                                    <div className="flex-1">
                                        <Input
                                            value={name}
                                            onChange={(val) => handleNameChange(index, val)}
                                            placeholder={`Person ${index + 1} name`}
                                        />
                                    </div>
                                    <Button
                                        color="tertiary"
                                        size="md"
                                        onClick={() => handleRemoveName(index)}
                                        isDisabled={names.length <= 1}
                                    >
                                        <Trash01 className="size-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <Button
                            color="secondary"
                            size="md"
                            className="w-full rounded-xl border-dashed"
                            onClick={handleAddName}
                            iconLeading={Plus}
                        >
                            Add Another Person
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
