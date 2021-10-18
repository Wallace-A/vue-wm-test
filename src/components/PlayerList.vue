<template>
  <div class="card mt-4">
      <table class="table m-0">
          <thead>
              <tr>
                    <th scopr="col">Name</th>
                    <th scopr="col">Email</th>
                    <th scopr="col">Action</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="{ id, name, email } in players" :key="id">
                    <td>{{ name }}</td>
                    <td>{{ email }}</td>
                    <td>
                        <router-link :to="`/edit/${id}`">
                            <button class="btn btn-primary btn-sm me-2">
                                Edit
                            </button>
                        </router-link>
                        <button @click="deletePlayer(id)" class="btn btn-danger btn-sm">
                            Delete
                        </button>
                    </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import { useLoadPlayers, deletePlayer } from "@/firebase";
export default {
    setup() {
        const players = useLoadPlayers();

        return { players, deletePlayer }
    }
}
</script>

<style>

</style>