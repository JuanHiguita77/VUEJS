<template>
    <section>
        <h2> Add new Teacher </h2>

        <div class="">
            <label>Name: </label>
            <input type="text" v-model="teacher.name">

            <label>Surname: </label>
            <input type="text" v-model="teacher.surname">

            <label>DNI: </label>
            <input type="text" v-model="teacher.dni">

            <label>Matter to teach</label>
            <input type="text" v-model="matter">
            <button @click="addMatter()"> Add new Matter </button>

            <input type="checkbox" v-model="teacher.docs"/> Documentation uploaded
            
            <button @click="addTeacher()"> Add new Teacher </button>

            <div>
                <ul>
                    <li v-for="(matter, i) in teacher.matters" :key="i">{{ matter }}</li>
                </ul>
            </div>
        </div>
    </section>

    <section>
        <h3> TEACHER LIST </h3>

        <table>
            <tr>
                <th>Name ---- </th>
                <th>Surname ---- </th>
                <th>DNI ---- </th>
                <th>Matters ---- </th>
                <th>Docs Uploaded </th>    
            </tr>
            <tr v-for="teacher in teachers" :key="teacher.dni">
                <th>{{ teacher.name }}</th>
                <th>{{ teacher.surname }}----</th>
                <th>{{ teacher.dni }}----</th>
                <th>
                    <ol>
                        <li v-for="(matter, i) in teacher.matters" :key="i">{{ matter }}</li>  
                    </ol>    
                </th>
                <th v-if="teacher.docs"> Succesfull! </th>
                <th v-else> Docs Dont Sended! x.x </th>
            </tr>
        </table>
    </section>   
</template>

<script lang="ts" setup>
    import { ref, Ref } from 'vue';

    interface ITeacher
    {
        name: string,
        surname: string,
        dni: string,
        matters: Array<string>,
        docs: boolean
    }

    let teacher:Ref<ITeacher> = ref(
        {
            name: '',
            surname: '',
            dni: '',
            matters: [],
            docs: false
        }
    );

    let teachers:Ref<Array<ITeacher>> = ref([]);

    let matter:Ref<string> = ref('');

    const addMatter = () =>
    {
        teacher.value.matters.push(matter.value);
        matter.value = '';
    }

    const addTeacher = () =>
    {
        teachers.value.push(
            {
                name: teacher.value.name,
                surname: teacher.value.surname,
                dni: teacher.value.dni,
                matters: teacher.value.matters,
                docs: teacher.value.docs
            }
        );
        teacher.value.name = '';
        teacher.value.surname = '';
        teacher.value.dni = '';
        teacher.value.matters = [];
        matter.value = '';
    }

</script>

<style scoped>

</style>